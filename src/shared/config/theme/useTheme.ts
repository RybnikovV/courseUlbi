import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';
import { EThemes } from './ThemeContext';


interface useThemeResult {
  theme: EThemes;
  changeTheme: () => void
}

const useTheme = (): useThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext);

  const changeTheme = () => {
    const actualTheme = theme === EThemes.DARK ? EThemes.LIGHT : EThemes.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, actualTheme);
    setTheme(actualTheme)
  };

  return {
    theme,
    changeTheme,
  }
}

export default useTheme;