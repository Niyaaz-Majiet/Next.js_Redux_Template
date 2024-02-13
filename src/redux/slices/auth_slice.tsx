import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { setCookie } from 'cookies-next';


const initialState = {
    isLoggedIn: false,
    user: {}
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
        },
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
    },
});

export const loginUser = (user: any) => async (dispatch: any) => {
    setCookie("loggedIn", true);
    dispatch(login(user));
};

export const logoutUser = () => async (dispatch: any) => {
    setCookie("loggedIn", false);
    dispatch(logout());
};

export const { logout, login } =
    authSlice.actions;

export const getAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;