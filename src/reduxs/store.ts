import {configureStore} from '@reduxjs/toolkit';
import userInfo from './userSlice';
import theme from './themeSlice';
import auth from './authSlices';
import todo from './todoSlice';

const store = configureStore({
  reducer: {
    userInfo,
    theme,
    auth,
    todo,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
