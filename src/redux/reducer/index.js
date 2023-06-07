import CommentSlice from "./CommentSlice";
import ListPostSlice from "./ListPostSlice";
import ListUsersSlice from "./ListUsersSlice";
import UsersApiSlice from "./UsersApiSlice";

export const rootReducer = {
    users: UsersApiSlice,
    listUsers: ListUsersSlice,
    listPosts: ListPostSlice,
    comments: CommentSlice

}