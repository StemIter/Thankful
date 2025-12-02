import React, { useState, useRef, useEffect } from 'react';
import { Pause, Music } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 音频事件监听
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = (e: Event) => {
      console.error('音频播放错误:', e);
      const audioElement = e.target as HTMLAudioElement;
      console.error('错误详情:', audioElement.error);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      // 如果还没有设置音频源，则设置它
      if (!audio.src || audio.src === window.location.href) {
        audio.src = '/music/gratitude-music.mp3';
        audio.loop = true;
      }
      
      // 设置 preload 为 auto
      audio.preload = 'auto';
      
      audio.play().catch(error => {
        console.error('播放失败:', error);
        // 如果是由于没有设置源导致的错误，尝试重新设置
        if (error.name === 'NotAllowedError' || error.name === 'NotSupportedError') {
          console.log('尝试重新加载音频...');
          audio.load();
          setTimeout(() => {
            audio.play().catch(error => {
              console.error('重试播放仍然失败:', error);
            });
          }, 100);
        }
      });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} />
      <button
        onClick={togglePlayback}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
        aria-label={isPlaying ? "暂停音乐" : "播放音乐"}
      >
        {isPlaying ? (
        <Pause className="w-5 h-5" />
      ) : (
        <Music className="w-5 h-5" />
      )}
      </button>
    </div>
  );
};