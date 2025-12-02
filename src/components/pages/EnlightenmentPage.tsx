import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Lightbulb, GraduationCap, Users } from 'lucide-react';

export const EnlightenmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-6 sm:py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full">
              <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 animate-pulse" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">
            劳动 STEM 教育引路人：感恩指引，爱上劳动教育
          </h1>
          <div className="w-16 h-1 sm:w-20 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mx-auto rounded-full shadow-sm"></div>
        </div>

        {/* 主要内容 */}
        <Card className="mb-8 shadow-lg border-blue-100 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">教育之光</h3>
            </div>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p className="animate-fade-in-up">
                特别感谢您带我走进劳动 STEM 教育这个领域，让我有机会认识很多优秀的老师，听了不少精彩的课。
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                每次交流都有新收获，也让我真正喜欢上劳动教育，明确了自己的专业方向。
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                这段经历让我对教育事业有了更深的理解与热爱，受益匪浅。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 学习经历展示 */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-lg border-blue-100 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-4 flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">启发课程</h3>
              <p className="text-gray-600 text-sm">
                参与富有启发性的STEM教育课程学习
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-blue-100 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-indigo-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">同仁交流</h3>
              <p className="text-gray-600 text-sm">
                与优秀教育同仁深入交流探讨
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-blue-100 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg mb-4 flex items-center justify-center">
                <Lightbulb className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">创新思维</h3>
              <p className="text-gray-600 text-sm">
                学习先进的教育理念与创新方法
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 教育理念 */}
        <Card className="shadow-lg border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-8 h-8 text-indigo-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">教育感悟</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">劳动教育培养学生的动手能力</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">STEM教育激发创新思维</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">实践活动中体验学习乐趣</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">跨学科融合提升综合素养</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};