import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IStatusState {
  isPlaying: boolean;
  currentSong: string;
  currentArtist: string;
  currentArtwork: string;
}

const initValue: IStatusState = {
  isPlaying: false,
  currentSong: '',
  currentArtist: '',
  currentArtwork: '',
};

export const statusSlice = createSlice({
  name: 'status',
  initialState: initValue,
  reducers: {
    onUpdatestatus: (state, action: PayloadAction<{isPlaying: boolean}>) => {
      state.isPlaying = action.payload.isPlaying;
    },
    onUpdateCurrentSong: (
      state,
      action: PayloadAction<{currentSong: string}>,
    ) => {
      state.currentSong = action.payload.currentSong;
    },
    onUpdateCurrentArtist: (
      state,
      action: PayloadAction<{currentArtist: string}>,
    ) => {
      state.currentArtist = action.payload.currentArtist;
    },
    onUpdateCurrentArtwork: (
      state,
      action: PayloadAction<{currentArtwork: string}>,
    ) => {
      state.currentArtwork = action.payload.currentArtwork;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onUpdatestatus,
  onUpdateCurrentSong,
  onUpdateCurrentArtist,
  onUpdateCurrentArtwork,
} = statusSlice.actions;

export default statusSlice.reducer;
