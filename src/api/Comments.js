import axiosClient from "./AxiosClient";

class Comments {
    static getComments(){
        const url = 'comments';
        return axiosClient.get(url)
    };
    static addComments(param){
        const url = 'comments';
        return axiosClient.post(url, param)
    }
}
export default Comments;