// redux/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false, 
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    hideSidebar: (state)=>{
      state.isOpen = false
    },
  }
});

export const { toggleSidebar,hideSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
