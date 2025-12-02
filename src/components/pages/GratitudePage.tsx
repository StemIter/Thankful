import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Handshake } from 'lucide-react';

export const GratitudePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-6 sm:py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-gradient-to-br from-red-100 to-pink-100 rounded-full">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 animate-pulse" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            博士后招聘面试：感恩认可，有幸同行
          </h1>
          <div className="w-16 h-1 sm:w-20 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mx-auto rounded-full shadow-sm"></div>
        </div>

        {/* 主要内容 */}
        <Card className="mb-8 shadow-lg border-orange-100 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Handshake className="w-8 h-8 text-orange-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">感恩之心</h3>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p className="animate-fade-in-up">
                还记得博士后面试的时候，特别感谢您的认可和包容，给了我加入团队的机会。
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                这份知遇之恩，是我学术路上的重要阶梯，始终铭记于心。
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                每当回想起那段面试和入职的日子，心中总是充满感激之情。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 照片展示区域 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="shadow-lg border-orange-100 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">团队合影</h3>
              <p className="text-gray-600 text-sm">
                难忘的入职时刻，与优秀的同事们初次见面
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-orange-100 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="aspect-video bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                <Handshake className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">面试交流</h3>
              <p className="text-gray-600 text-sm">
                深入的交流与了解，开启人生新的篇章
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 感言区域 */}
        <Card className="shadow-lg border-red-100 bg-gradient-to-br from-red-50 to-orange-50">
          <CardContent className="p-8">
            <blockquote className="text-lg italic text-gray-700 text-center">
              "知遇之恩，当永生难忘。您的慧眼识珠，给了我展示自己的舞台。"
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};