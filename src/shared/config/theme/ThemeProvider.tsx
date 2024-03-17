import { ThemeContext, LOCAL_STORAGE_THEME_KEY, EThemes } from './ThemeContext';
import { useState, FC, PropsWithChildren } from 'react';

const themeByLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as EThemes;

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<EThemes>(themeByLocalStorage || EThemes.LIGHT);

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