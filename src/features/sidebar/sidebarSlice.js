import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    hide: false,
  },
  reducers: {
    showSidebar: (state) => {
      state.hide = false;
    },
    hideSidebar: (state) => {
      state.hide = true;
    },
  },
});

export const { showSidebar, hideSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
