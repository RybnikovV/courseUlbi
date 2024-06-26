import { createContext } from 'react';

export enum EThemes {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface ThemeContextProps {
  theme?: EThemes;
  setTheme?: (theme: EThemes) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
