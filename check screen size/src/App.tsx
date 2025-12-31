import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { ScreenSizeDisplay } from './components/ScreenSizeDisplay';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <ScreenSizeDisplay />
        </main>
      </div>
    </div>
  );
}

export default App;
