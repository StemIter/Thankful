import React from 'react';
import { Card } from '@/components/ui/card';

export const GrowthPage: React.FC = () => {
  const photos = [
    '/src/assets/images/3.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 标题区域 */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            全面发展：多元赋能，绽放自我
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mx-auto rounded-full"></div>
        </div>

        {/* 主要内容 */}
        <div className="space-y-6">
          {/* 主要感谢内容 */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg p-5 animate-fade-in-up">
            <p className="text-gray-700 leading-relaxed text-sm">
              也特别感谢您鼓励我多方面尝试，不光让我专注学术，还敢在文艺方面大胆展示自己。
              这份包容让我学会了平衡生活和工作，也更懂得了热爱的意义。
            </p>
          </Card>

          {/* 照片展示 */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-400 mx-auto max-w-xl flex justify-center"
              >
                <img
                  src={photo}
                  alt={`文艺照片 ${index + 1}`}
                  className="max-w-full max-h-96 object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};