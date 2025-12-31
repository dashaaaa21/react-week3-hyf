import { useScreenSize } from '../hooks/useScreenSize';

export function Sidebar() {
  const screenSize = useScreenSize('Sidebar');

  if (screenSize === 'small') {
    return null;
  }

  return (
    <aside className="w-48 border-r border-gray-200 p-6 bg-white">
      <h3 className="text-sm font-medium text-gray-900 mb-4">Menu</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className="hover:text-gray-900 cursor-pointer">Item 1</li>
        <li className="hover:text-gray-900 cursor-pointer">Item 2</li>
        <li className="hover:text-gray-900 cursor-pointer">Item 3</li>
      </ul>
    </aside>
  );
}
