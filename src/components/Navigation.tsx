import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Lightbulb, Compass, Sparkles, Home } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const navigationItems = [
    {
      id: 'home',
      label: '主页',
      icon: Home,
      color: 'from-gray-500 to-gray-600',
      bgColor: 'hover:bg-gray-50'
    },
    {
      id: 'gratitude',
      label: '知遇之恩',
      icon: Heart,
      color: 'from-red-400 to-orange-400',
      bgColor: 'hover:bg-red-50'
    },
    {
      id: 'enlightenment',
      label: '教育启迪',
      icon: Lightbulb,
      color: 'from-blue-400 to-purple-400',
      bgColor: 'hover:bg-blue-50'
    },
    {
      id: 'guidance',
      label: '科研指导',
      icon: Compass,
      color: 'from-green-400 to-teal-400',
      bgColor: 'hover:bg-green-50'
    },
    {
      id: 'growth',
      label: '多元成长',
      icon: Sparkles,
      color: 'from-pink-400 to-purple-400',
      bgColor: 'hover:bg-pink-50'
    }
  ];

  return (
    <Card className="bg-white/95 backdrop-blur-sm border shadow-lg sticky top-4 z-40">
      <div className="flex justify-center items-center py-2 px-3">
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  flex items-center justify-center px-2 py-1.5 sm:px-3 sm:py-2 rounded-md transition-all duration-300 min-w-0
                  ${isActive
                    ? `bg-gradient-to-r ${item.color} text-white shadow-md transform scale-105`
                    : `${item.bgColor} text-gray-700 hover:shadow-sm`
                  }
                `}
              >
                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="ml-1 text-xs sm:text-sm font-medium truncate max-w-[3rem] sm:max-w-[4rem]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </Card>
  );
};