import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum EGender {
  male = 1,
  female = 2,
}

export interface IUser {
  created_at: string;
  deleted_at: null;
  email: string;
  email_verified_at: null;
  id: number;
  name: string;
  role_id: 3;
  theme: string;
  updated_at: string;
}

export interface ICustomer {
  age: number;
  ave_burn: string;
  ave_intake: string;
  created_at: string;
  deleted_at: null;
  gender: EGender;
  height: string;
  id: number;
  img: string;
  membership: 1;
  membership_expired: string;
  name: string;
  phone: string;
  preferred_training_time: number;
  tdee: string;
  total_paid: string;
  training_frequency: number;
  updated_at: string;
  user: IUser;
  user_id: number;
  weight: string;
}

export enum EStatusAuth {
  check = 1,
  unauth = 2,
  auth = 3,
}

export interface IAuth {
  customer: ICustomer;
  message: string;
  success: boolean;
  token: string;
  user_id: number;
  user_role_id: number;
  statusAuth: EStatusAuth;
}

const initValue: IAuth = {
  customer: {
    age: 0,
    ave_burn: '',
    ave_intake: '',
    created_at: '',
    deleted_at: null,
    gender: 1,
    height: '',
    id: 0,
    img: '',
    membership: 1,
    membership_expired: '',
    name: '',
    phone: '',
    preferred_training_time: 1,
    tdee: '',
    total_paid: '',
    training_frequency: 1,
    updated_at: '',
    user: {
      created_at: '',
      deleted_at: null,
      email: '',
      email_verified_at: null,
      id: -1,
      name: '',
      role_id: 3,
      theme: '',
      updated_at: '',
    },
    user_id: -1,
    weight: '',
  },
  message: '',
  success: false,
  token: '',
  user_id: -1,
  user_role_id: -1,
  statusAuth: EStatusAuth.check,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initValue,
  reducers: {
    onLogin: (state, action: PayloadAction<IAuth>) => {
      state.customer = action.payload.customer;
      state.message = action.payload.message;
      state.success = action.payload.success;
      state.token = action.payload.token;
      state.user_id = action.payload.user_id;
      state.user_role_id = action.payload.user_role_id;
      state.statusAuth = EStatusAuth.auth;
    },
    updateStatusAuth: (
      state,
      action: PayloadAction<{statusAuth: EStatusAuth}>,
    ) => {
      state.statusAuth = action.payload.statusAuth;
    },
  },
});

export const {onLogin, updateStatusAuth} = authSlice.actions;

export const saveAuthAsync = (auth: IAuth) => {
  try {
    AsyncStorage.setItem('@RN17Auth', JSON.stringify(auth));
  } catch (e) {
    // saving error
  }
};

export const getAuthAsync = async () => {
  try {
    const auth = await AsyncStorage.getItem('@RN17Auth');
    if (auth) {
      return JSON.parse(auth);
    }
    return null;
  } catch (e) {
    return null;
  }
};

export default authSlice.reducer;
