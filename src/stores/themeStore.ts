import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ColorScheme = 'light' | 'dark';

type ThemeState = {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
  setColorScheme: (scheme: ColorScheme) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      colorScheme: 'dark', // default to dark
      toggleColorScheme: () =>
        set((state) => {
          const newScheme = state.colorScheme === 'light' ? 'dark' : 'light';
          document.documentElement.dataset.theme = newScheme;

          return {
            colorScheme: newScheme,
          };
        }),
      setColorScheme: (scheme: ColorScheme) =>
        set(() => {
          document.documentElement.dataset.theme = scheme;

          return {
            colorScheme: scheme,
          };
        }),
    }),
    {
      name: 'theme-storage', // localStorage key
    },
  ),
);
