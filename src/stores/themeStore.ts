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
          return {
            colorScheme: state.colorScheme === 'light' ? 'dark' : 'light',
          };
        }),
      setColorScheme: (scheme: ColorScheme) =>
        set(() => ({
          colorScheme: scheme,
        })),
    }),
    {
      name: 'theme-storage', // localStorage key
    },
  ),
);
