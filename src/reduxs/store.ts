import {configureStore} from '@reduxjs/toolkit';
import theme from './themeSlice';

const store = configureStore({
  reducer: {
    theme,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
