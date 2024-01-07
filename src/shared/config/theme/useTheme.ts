import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';
import { Themes } from './ThemeContext';


interface useThemeResult {
  theme: string;
  changeTheme: () => void
}

const useTheme = (): useThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);

  const changeTheme = () => {
    const actualTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, actualTheme);
    setTheme(actualTheme)
  };

  return {
    theme,
    changeTheme,
  }
}

export default useTheme;