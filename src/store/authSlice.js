// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: null,
    refreshToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTokens: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.roles = action.payload.roles;
        },
        clearTokens: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
            state.roles = null;
        },
    },
});

export const { setTokens, clearTokens } = authSlice.actions;
export default authSlice.reducer;
