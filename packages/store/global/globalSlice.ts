import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const globalSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = globalSlice.actions;
export default globalSlice.reducer;
