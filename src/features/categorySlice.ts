import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategoriesState = {
  categories: [];
  loading: boolean;
  error: string;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: "",
};

export const getCategories = createAsyncThunk("products/getCategories", async () => {
  return fetch(
    "https://upayments-studycase-api.herokuapp.com/api/categories/",
    {
        method: "GET",
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmFhaG1ldGhrbkBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vaGFrYW5rYXJhYWhtZXQiLCJpYXQiOjE2NjA2NTM3NDMsImV4cCI6MTY2MTA4NTc0M30.xV1kFFBWZo8vH7i1tOCU3Xbr1WGytZcEulkYktsb-1s"}`,
        },
      }
  ).then((res) => res.json().then(data => data.categories));
});

export const categoriesSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getCategories.pending, (state: CategoriesState) => {
      state.loading = true;
    })
    builder.addCase(getCategories.fulfilled, (state: CategoriesState, action:PayloadAction<[]>) => {
      state.loading = false;
      state.error = "";
      state.categories = action.payload
    })
    builder.addCase(getCategories.rejected, (state: CategoriesState, action:PayloadAction<[]>) => {
      state.loading = false;
      state.categories = [];
      state.error = "Failed to load"
    })
  }
});


export default categoriesSlice.reducer;