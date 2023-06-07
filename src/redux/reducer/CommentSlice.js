import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Comments from "../../api/Comments";
import { reduce } from "lodash";

export const CallComments = createAsyncThunk("comments/getComments",
async () =>{
    const response = await Comments.getComments();
    return response;
}
);

const CommentsSlice = createSlice({
    name: "comments",
    initialState: [],
    extraReducers: {
        [CallComments.fulfilled]: (state, action) => {
            return (state = action.payload);
        }
    }
});

const {reducer} = CommentsSlice;
export default  reducer;