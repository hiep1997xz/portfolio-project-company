import { createSlice } from '@reduxjs/toolkit';

export interface SettingState {
  theme?: string;
  fontFamily: string;
  fontSize?: number;
  customBackgroundColor?: string;
  customTextColor?: string;
  isReset?: boolean;
}

const getLocalStorage = (key: string, defaultValue: any) => {
  if (typeof window !== 'undefined') {
    const stored = localStorage?.getItem(key);
    try {
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (error) {
      console.log(error);
      return stored || defaultValue;
    }
  }
  return defaultValue;
};

const initialState: SettingState = {
  theme: getLocalStorage('theme', 'light'),
  fontFamily: getLocalStorage('fontFamily', 'roboto'),
  fontSize: getLocalStorage('fontSize', 24),
  customBackgroundColor: getLocalStorage('customBackgroundColor', ''),
  customTextColor: getLocalStorage('customTextColor', '#565B64'),
  isReset: false
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = newTheme;
      localStorage.setItem('theme', JSON.stringify(state.theme));
      if (state.isReset) {
        state.customTextColor = newTheme === 'dark' ? '#FFF' : '#565B64';
        localStorage.setItem('customTextColor', JSON.stringify(state.customTextColor));
      }
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', JSON.stringify(action.payload));
    },
    setFontFamily: (state, action) => {
      state.fontFamily = action.payload;
      localStorage.setItem('fontFamily', JSON.stringify(state.fontFamily));
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
      localStorage.setItem('fontSize', JSON.stringify(state.fontSize));
    },
    setCustomBackgroundColor: (state, action) => {
      state.customBackgroundColor = action.payload;
      localStorage.setItem('customBackgroundColor', JSON.stringify(action.payload));
    },
    resetBackgroundColor: (state) => {
      state.customBackgroundColor = '';
      localStorage.removeItem('customBackgroundColor');
    },
    setCustomTextColor: (state, action) => {
      state.customTextColor = action.payload;
      state.isReset = false;
      localStorage.setItem('customTextColor', JSON.stringify(action.payload));
    },
    resetTextColor: (state) => {
      state.customTextColor = '#fff';
      localStorage.removeItem('customTextColor');
    },
    resetSettings: (state) => {
      const isDarkMode = state.theme === 'dark';

      state.fontFamily = 'roboto';
      state.fontSize = 24;
      state.customBackgroundColor = '';
      state.customTextColor = isDarkMode ? '#FFF' : '#565B64';
      state.isReset = true;

      localStorage.setItem('fontFamily', JSON.stringify(state.fontFamily));
      localStorage.setItem('fontSize', JSON.stringify(state.fontSize));
      localStorage.removeItem('customBackgroundColor');
      localStorage.setItem('customTextColor', JSON.stringify(state.customTextColor));
    }
  }
});

export const {
  toggleTheme,
  setTheme,
  setFontFamily,
  setFontSize,
  setCustomBackgroundColor,
  resetBackgroundColor,
  setCustomTextColor,
  resetTextColor,
  resetSettings
} = settingsSlice.actions;
export default settingsSlice.reducer;
