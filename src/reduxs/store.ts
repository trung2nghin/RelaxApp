import {configureStore} from '@reduxjs/toolkit';
import theme from './themeSlice';
import status from './statusSlice'

const store = configureStore({
  reducer: {
    theme,
    status
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
