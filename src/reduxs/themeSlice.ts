import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ITheme {
  backgroundColor: string;
  color: string;
  isThemeLight: boolean;
}

export const lightTheme: ITheme = {
  backgroundColor: '#E5E5E5',
  color: '#17151f',//#0b1224
  isThemeLight: true,
};

export const darkTheme: ITheme = {
  backgroundColor: '#17151f',
  color: '#E5E5E5',
  isThemeLight: false,
};
const initValue: ITheme = lightTheme;

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initValue,
  reducers: {
    onUpdateTheme: (state, action: PayloadAction<ITheme>) => {
      state.backgroundColor = action.payload.backgroundColor;
      state.color = action.payload.color;
      state.isThemeLight = action.payload.isThemeLight;
    },
  },
});

// Action creators are generated for each case reducer function
export const {onUpdateTheme} = themeSlice.actions;

export default themeSlice.reducer;
