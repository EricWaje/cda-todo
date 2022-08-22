import { createSlice } from '@reduxjs/toolkit';

const localData = localStorage.getItem('user');
const initialState = {
    user: localData ? localData : '',
    password: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            //console.log('action', {payload});
            state.user = payload.user;
            state.password = payload.password;
            localStorage.setItem('user', payload.user);
        },
        logout: (state) => {
            state.user = '';
            state.password = '';
        },
    },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
