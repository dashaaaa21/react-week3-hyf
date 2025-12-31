import { useScreenSize } from '../hooks/useScreenSize';

export function Navigation() {
  const screenSize = useScreenSize('Navigation');

  return (
    <nav className="border-b border-gray-200 px-6 py-4 flex justify-between items-center bg-white">
      <div className="text-lg font-medium text-gray-900">
        App Daria
      </div>
      {screenSize !== 'small' ? (
        <div className="flex gap-8 text-gray-600">
          <a href="#" className="hover:text-gray-900">Home</a>
          <a href="#" className="hover:text-gray-900">About</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </div>
      ) : (
        <button className="text-gray-600 hover:text-gray-900">
          Menu
        </button>
      )}
    </nav>
  );
}
