import { configureStore } from "@reduxjs/toolkit";
import Options from "../Slice/Options";
import sidebarSlice from "../Slice/sidebarSlice";

const store = configureStore({
  reducer: {
    options: Options,
    sidebar:sidebarSlice
  },
});
export default store;
