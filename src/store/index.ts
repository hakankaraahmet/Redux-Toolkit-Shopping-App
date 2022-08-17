import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';
import categoryReducer from '../features/categorySlice';
import addItemReducer from '../features/addSlice';


export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    addItem: addItemReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch