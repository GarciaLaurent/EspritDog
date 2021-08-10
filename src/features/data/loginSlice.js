import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {
    logIn: (state) => {
      state.value = true;
    },
    logOut: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
