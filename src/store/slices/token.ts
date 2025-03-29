import { createSlice } from '@reduxjs/toolkit';

export interface TokenState {
  token?: string;
}

const initialState: TokenState = {
  token: typeof window !== 'undefined' && localStorage.getItem('token') || '',
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    clearToken: (state) => {
      state.token = '';
      localStorage.removeItem('token');
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
