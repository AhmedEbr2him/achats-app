import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isSidbarOpen: false,
};

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.isSidbarOpen = !state.isSidbarOpen;
		},
	},
});

export const selectSidebarOpen = (state) => state.sidebar.isSidbarOpen;

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
