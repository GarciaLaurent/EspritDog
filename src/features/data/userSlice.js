import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "currentUser",
  initialState: {
    value: "",
  },
  reducers: {
    currentUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentUser } = userSlice.actions;

export default userSlice.reducer;
