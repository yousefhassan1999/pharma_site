import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
  name: "Data",
  initialState: {
    data: [],
    showingData: [],
  },
  reducers: {
    fetchData: (state, action) => {
      state.data = action.payload;
      state.showingData = action.payload;
    },
    SetshowingData: (state, action) => {
      state.showingData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchData, SetshowingData } = DataSlice.actions;

export default DataSlice.reducer;
