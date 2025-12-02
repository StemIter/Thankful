import React from 'react';
import { Card } from '@/components/ui/card';

export const EnlightenmentPage: React.FC = () => {
  const photos = [
    '/src/assets/images/2.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 标题区域 */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            劳动 STEM 教育引路人：感恩指引，爱上劳动教育
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mx-auto rounded-full"></div>
        </div>

        {/* 主要内容 */}
        <div className="space-y-6">
          {/* 主要感谢内容 */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg p-5 animate-fade-in-up">
            <p className="text-gray-700 leading-relaxed text-sm">
              感恩您带我走进劳动、STEM 教育的广阔天地，让我有机会认识很多优秀的老师，听了不少精彩的课。
              每次交流都有新收获，也让我真正喜欢上劳动教育，明确了自己的专业方向。
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
                  alt={`教育照片 ${index + 1}`}
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