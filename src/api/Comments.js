import axiosClient from "./AxiosClient";

class Comments {
    static getComments(){
        const url = 'comments';
        return axiosClient.get(url)
    }
}
export default Comments;