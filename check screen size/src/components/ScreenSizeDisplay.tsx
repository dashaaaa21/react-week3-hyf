import { useWindowSize } from '../hooks/useWindowSize';

export function ScreenSizeDisplay() {
  const windowSize = useWindowSize('Main Display');

  const getCategory = () => {
    if (windowSize.width >= 1024) return { name: 'Large', color: 'text-green-600' };
    if (windowSize.width >= 768) return { name: 'Medium', color: 'text-orange-600' };
    return { name: 'Small', color: 'text-blue-600' };
  };

  const category = getCategory();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center space-y-8">
        
        <h1 className="text-2xl font-light text-gray-400">Screen Size</h1>
        
        <div className="text-8xl font-bold text-gray-900">
          {windowSize.width} × {windowSize.height}
        </div>
        
        <div className={`text-4xl font-medium ${category.color}`}>
          {category.name}
        </div>

      </div>
    </div>
  );
}
