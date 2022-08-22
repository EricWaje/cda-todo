import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import loginSlice from '../features/login/loginSlice';
import productsSlice from '../features/products/productsSlice';

const store = configureStore({
    reducer: {
        contador: counterSlice,
        login: loginSlice,
        products: productsSlice,
    },
});

export default store;
