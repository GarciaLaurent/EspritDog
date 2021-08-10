import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/data/loginSlice";
import videoDataReducer from "../features/data/videoDataSlice";
import userReducer from "../features/data/userSlice";

export default configureStore({
  // enhancers: [ReactotronConfig.createEnhancer()],
  reducer: {
    login: loginReducer,
    videoData: videoDataReducer,
    currentUser: userReducer,
  },
});
