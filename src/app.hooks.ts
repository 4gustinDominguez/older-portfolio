import * as React from 'react';
import { Mode } from './app.model';

export const useThemeMode = (): { mode: Mode; toggleMode: () => void; componentMounted: boolean } => {
  const [mode, setMode] = React.useState<Mode>('light');
  const [componentMounted, setComponentMounted] = React.useState<boolean>(false);

  const setTheme = (theme: Mode) => {
    window.localStorage.setItem('mode', theme);
    setMode(theme);
  };

  React.useEffect(() => {
    const localMode = window.localStorage.getItem('mode') as Mode;

    if (localMode) {
      setMode(localMode);
    } else {
      setTheme('light');
    }

    setComponentMounted(true);
  }, []);

  const toggleMode = () => {
    if (mode === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return { mode, toggleMode, componentMounted };
};
