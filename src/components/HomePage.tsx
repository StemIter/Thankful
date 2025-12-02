import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { BannerPhotoWall } from './BannerPhotoWall';
import { GratitudePage } from './GratitudePage';
import { EnlightenmentPage } from './EnlightenmentPage';
import { GuidancePage } from './GuidancePage';
import { GrowthPage } from './GrowthPage';
import { MusicPlayer } from './MusicPlayer';

export const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [photos, setPhotos] = useState<string[]>([]);

  // 动态加载public/images目录中的所有照片
  useEffect(() => {
    // 创建照片路径数组，包含public/images目录中的所有照片
    const photoPaths = [];
    for (let i = 1; i <= 21; i++) {
      photoPaths.push(`/images/${i}.jpg`);
    }
    setPhotos(photoPaths);
  }, []);

  // 渲染当前页面
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'gratitude':
        return <GratitudePage />;
      case 'enlightenment':
        return <EnlightenmentPage />;
      case 'guidance':
        return <GuidancePage />;
      case 'growth':
        return <GrowthPage />;
      default:
        return null; // 显示主页
    }
  };

  // 如果不是主页，显示对应的子页面
  if (currentPage !== 'home') {
    return (
      <div className="relative">
        <MusicPlayer />
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-3 py-2">
            <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
          </div>
        </div>
        <div className="pt-16 sm:pt-20">
          {renderCurrentPage()}
        </div>
      </div>
    );
  }

  // 主页内容
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <MusicPlayer />
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        {/* 导航区域 - 最前面 */}
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

        {/* 主标题区域 */}
        <div className="text-center py-8 sm:py-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 sm:mb-8 animate-fade-in-up px-4">
            感恩之旅，感谢有您
          </h1>
          <div className="w-20 h-1 sm:w-24 lg:w-32 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mx-auto rounded-full animate-scale-in shadow-sm"></div>
        </div>

        {/* 主页引言 */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100 p-6 sm:p-8">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
              记忆里的每一段温暖时光，都离不开您的照顾与指引。
              这份心意，想借着照片和音乐，慢慢说给您听。
            </p>
          </div>
        </div>

        {/* 横幅式照片墙 */}
        <div className="my-8">
          <BannerPhotoWall
            photos={photos}
            className="py-6 px-4"
          />
        </div>
      </div>
    </div>
  );
};