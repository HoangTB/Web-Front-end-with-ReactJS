import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ListUsers from "../../api/ListUsers";


export const CallListUsers = createAsyncThunk('users/getAllUsers',
async () =>{
    const response = await ListUsers.getAllUsers();
    return response;

});

const ListUsersSlice = createSlice({
    name: 'users',
    initialState: [],
    extraReducers: {
        [CallListUsers.fulfilled]: (state, action) =>{
            return ( state = action.payload);
        }

    }
});

const {reducer} = ListUsersSlice;
export default reducer;