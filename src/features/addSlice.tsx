import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type AddProductState = {
  loading: boolean;
  error: string;
};

const initialState: AddProductState = {
  loading: false,
  error: "",
};

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (values: any) => {
    return fetch(
      "https://upayments-studycase-api.herokuapp.com/api/products",
      {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" ,
            Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmFhaG1ldGhrbkBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vaGFrYW5rYXJhYWhtZXQiLCJpYXQiOjE2NjA2NTM3NDMsImV4cCI6MTY2MTA4NTc0M30.xV1kFFBWZo8vH7i1tOCU3Xbr1WGytZcEulkYktsb-1s"}`,
        },
        body: JSON.stringify(values),
      }
    ).then((res) => res.json());
  }
);

export const addSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(addProduct.pending, (state: AddProductState) => {
      state.loading = true;
    });
    builder.addCase(addProduct.fulfilled, (state: AddProductState) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addProduct.rejected, (state: AddProductState) => {
      state.loading = false;
      state.error = "Failed to load";
    });
  },
});

export default addSlice.reducer;