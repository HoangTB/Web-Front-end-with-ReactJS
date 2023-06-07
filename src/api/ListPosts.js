import axiosClient from "./AxiosClient";

class ListPosts {
    static getAllPosts() {
        const url = 'posts';
        return axiosClient.get(url)
    };
    static addPosts(params){
        const url = 'posts';
        return axiosClient.post(url, params)
    }
}
export default ListPosts;