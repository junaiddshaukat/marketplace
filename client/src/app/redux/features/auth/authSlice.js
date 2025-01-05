import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    user: {},
    tempuser: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegistration: (state, action) => {
      
            state.token = action.payload.token;
            
        },
        userLoggedIn: (state, action) => {
            state.token = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.token = "";
            state.user = "";
        },
        userTemporary: (state, action) => {
    
            state.tempuser = action.payload; // Fixed key `tempuser`
        },
    },
});

export const { userRegistration, userLoggedIn, userLoggedOut, userTemporary } = authSlice.actions;
export default authSlice.reducer;
