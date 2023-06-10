import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Follows from "../../api/Follows";

export const CallFollows = createAsyncThunk('follows/getFollows',
async () =>{
    const response = await Follows.getFollow();
    return response;
}
);

/*
 payload truyền lên là gì (id của thằng khác đang nhập)
    khi tạo ra 1 action updatefollow 


    lấy user từ local đang đăng nhập so sanhs với thằng redux state follow 

    (findindex)

    trương hợp 1: nếu user không tồn tại ở reduxx

    gọi api post tạo mới user vào với {iduser, listfollow ; [] }

    trường hợp 2: nếu tìm được vị trí index của nó thì 
    từ cái mảng state của redux lấy phần tử tại vị trí index đó. - cập nhật cái listfollow.push(id)

    tại cái object vừa được cập nhật mình sẽ sử dụng api patch 





    cập state cho redux 
    extraReducers: [extraReducers.fullfile]: (state, action) =>{
        state = [...state, action.payload]
        return state
    }
*/


const FollowsSlice = createSlice({
    name: 'Follows',
    initialState: [],
    extraReducers:{
        [CallFollows.fulfilled]:(state, action) => {
            return (state = action.payload);
        }
    }
})
const {reducer} = FollowsSlice;
export default reducer;