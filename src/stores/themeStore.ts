import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ColorScheme = 'light' | 'dark' | 'purple' | 'yellow' | 'orange' | 'dark-purple';

const THEME_CYCLE: ColorScheme[] = ['light', 'dark', 'purple', 'yellow', 'orange', 'dark-purple'];

type ThemeState = {
  colorScheme: ColorScheme;
  toggleColorScheme: () => void;
  cycleColorScheme: () => void;
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
      cycleColorScheme: () =>
        set((state) => {
          const currentIndex = THEME_CYCLE.indexOf(state.colorScheme);
          const nextIndex = (currentIndex + 1) % THEME_CYCLE.length;
          const newScheme = THEME_CYCLE[nextIndex];
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
