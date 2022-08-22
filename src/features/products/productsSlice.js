import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://fake-products-eric.herokuapp.com/api/products';

const initialState = {
    products: [],
    loading: true,
    error: false,
};

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        try {
            const data = await fetch(URL);
            const info = await data.json();
            return info;
        } catch (error) {
            console.log(error);
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = true;
            state.products = [];
            state.error = false;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload;
            state.error = false;
        },
        [getProducts.rejected]: (state) => {
            state.loading = false;
            state.products = [];
            state.error = true;
        },
    },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
