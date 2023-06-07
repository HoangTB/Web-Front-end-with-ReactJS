import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ListPosts from "../../api/ListPosts";

export const CallListPosts = createAsyncThunk('posts/getAllPosts',
    async () => {
        const response = await ListPosts.getAllPosts();
        return response;
    });




const ListPostsSlice = createSlice({
    name: 'posts',
    initialState: [],
    extraReducers: {
        [CallListPosts.fulfilled]: (state, action) => {
            return (state = action.payload);
        }
    }
});
const { reducer } = ListPostsSlice;
export default reducer;