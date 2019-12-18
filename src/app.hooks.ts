import * as React from 'react';
import { Mode } from './app.model';

export const useThemeMode = (): { mode: Mode; toggleMode: () => void } => {
  const [mode, setMode] = React.useState<Mode>('light');

  const setTheme = (theme: Mode) => {
    // window.localStorage.setItem('mode', theme);
    setMode(theme);
  };

  /*
  React.useEffect(() => {
    const localMode = window.localStorage.getItem('mode') as Mode;

    if (localMode) {
      setMode(localMode);
    } else {
      setTheme('light');
    }
  }, []);
  */

  const toggleMode = () => {
    if (mode === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return { mode, toggleMode };
};
