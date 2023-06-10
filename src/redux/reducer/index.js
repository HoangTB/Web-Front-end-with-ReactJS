import CommentSlice from "./CommentSlice";
import Follows from "./Follows";
import ListPostSlice from "./ListPostSlice";
import ListUsersSlice from "./ListUsersSlice";
import UsersApiSlice from "./UsersApiSlice";

export const rootReducer = {
    users: UsersApiSlice,
    listUsers: ListUsersSlice,
    listPosts: ListPostSlice,
    comments: CommentSlice,
    follows : Follows

}