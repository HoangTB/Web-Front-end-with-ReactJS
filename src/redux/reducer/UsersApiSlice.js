import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react'
import UsersApi from '../../api/UsersApi';

export const register = createAsyncThunk("register/fetchAuth",
async (payload) => {
    const response = await UsersApi.register(payload);
    localStorage.setItem('users', JSON.stringify(response.user));
    localStorage.setItem('access_token', JSON.stringify(response.accessToken));
    return response;
});

export const login = createAsyncThunk("login/fetchAuth",
async (payload) => {
    const response = await UsersApi.login(payload);
    response && localStorage.setItem('users', JSON.stringify(response.user));
    response && localStorage.setItem('access_token', JSON.stringify(response.accessToken));
    return response;
 }
)

const UsersApiSlice = createSlice({
    name: 'users',
    initialState: JSON.parse(localStorage.getItem("users")) || {},
    extraReducers:{
        [register.fulfilled]: (state, action)=>{
            return (state = action.payload.user);
        },

        [login.fulfilled]: (state, action)=>{
            return (state = action.payload.user);
         }

    }
})

const { actions, reducer} = UsersApiSlice
export default reducer;
