import { ThemeContext, LOCAL_STORAGE_THEME_KEY, Themes } from './ThemeContext';
import { useState, FC, PropsWithChildren } from 'react';

const themeByLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes;

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<Themes>(themeByLocalStorage || Themes.LIGHT);

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;