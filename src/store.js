import { configureStore } from "@reduxjs/toolkit";
import sidebar from "./features/sidebar/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebar,
  },
});

export default store;
