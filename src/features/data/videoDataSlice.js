import { createSlice } from "@reduxjs/toolkit";

export const videoDataSlice = createSlice({
  name: "videoData",
  initialState: {
    value: null,
  },
  reducers: {
    videoData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { videoData } = videoDataSlice.actions;

export default videoDataSlice.reducer;
