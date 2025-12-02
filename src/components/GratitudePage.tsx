import React from 'react';
import { Card } from '@/components/ui/card';

export const GratitudePage: React.FC = () => {
  const photos = [
    '/src/assets/images/1.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 py-6">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 标题区域 */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            博士后招聘面试：感恩认可，有幸同行
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* 主要内容 */}
        <div className="space-y-6">
          {/* 主要感谢内容 */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg p-5 animate-fade-in-up">
            <p className="text-gray-700 leading-relaxed text-sm">
              还记得博士后面试的时候，特别感谢您的认可和包容，给了我加入团队的机会。
              这份知遇之恩，是我学术路上的重要阶梯，始终铭记于心。
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
                  alt={`团队照片 ${index + 1}`}
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