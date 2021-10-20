import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IStatusState {
  isPlaying: boolean;
}

const initValue: IStatusState = {
  isPlaying: false,
};

export const statusSlice = createSlice({
  name: 'status',
  initialState: initValue,
  reducers: {
    onUpdatestatus: (state, action: PayloadAction<IStatusState>) => {
      state.isPlaying = action.payload.isPlaying;
    },
  },
});

// Action creators are generated for each case reducer function
export const {onUpdatestatus} = statusSlice.actions;

export default statusSlice.reducer;