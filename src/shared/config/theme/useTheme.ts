import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, EThemes } from './ThemeContext';

interface useThemeResult {
  theme: EThemes;
  changeTheme: () => void;
}

const useTheme = (): useThemeResult => {
  const { theme = EThemes.LIGHT, setTheme } = useContext(ThemeContext);

  const changeTheme = (): void => {
    const actualTheme = theme === EThemes.DARK ? EThemes.LIGHT : EThemes.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, actualTheme);
    if (setTheme !== undefined) {
      setTheme(actualTheme);
    }
  };

  return {
    theme,
    changeTheme,
  };
};

export default useTheme;
