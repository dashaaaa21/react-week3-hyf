import { useDebugValue } from 'react';
import { useWindowSize } from './useWindowSize';

export type ScreenSize = 'small' | 'medium' | 'large';

export function useScreenSize(label: string = 'Screen Size'): ScreenSize {
  const { width } = useWindowSize(label);

  let size: ScreenSize = 'small';
  if (width >= 1024) {
    size = 'large';
  } else if (width >= 768) {
    size = 'medium';
  }

  useDebugValue(`${label}: ${size} (${width}px)`);

  return size;
}
