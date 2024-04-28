import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/user/userSlice';
import themeReducer from './features/theme/themeSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    userState: userReducer,
    themeState: themeReducer,
    cartState: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
