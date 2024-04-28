import { applyTheme } from '@/utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark' | 'system';

type ThemeState = {
  theme: Theme;
};

const initializeTheme = (): Theme => {
  const theme =
    (localStorage.getItem('comfy-sloth-theme') as Theme) || 'system';
  applyTheme(theme);
  return theme;
};

const initialState: ThemeState = {
  theme: initializeTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      applyTheme(action.payload);
      localStorage.setItem('comfy-sloth-theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
