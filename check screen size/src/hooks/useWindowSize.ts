import { useState, useEffect, useDebugValue } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(label: string = 'Window Size'): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });


  useDebugValue(`${label}: ${windowSize.width}x${windowSize.height}`);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
