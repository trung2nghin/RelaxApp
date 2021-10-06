import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IUserState {
  name: string;
  age: string;
  address: string;
}

const initValue: IUserState = {
  name: 'Nguyen Van A',
  age: '20',
  address: 'Hanoi',
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initValue,
  reducers: {
    onUpdateUserInfo: (state, action: PayloadAction<IUserState>) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.address = action.payload.address;
    },

    onResetUserInfo: state => {
      state.name = 'Nguyen Van A';
      state.age = '20';
      state.address = 'Hanoi';
    },
  },
});

// Action creators are generated for each case reducer function
export const {onUpdateUserInfo, onResetUserInfo} = userInfoSlice.actions;

export default userInfoSlice.reducer;
