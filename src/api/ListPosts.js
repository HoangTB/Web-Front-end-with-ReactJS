import axiosClient from "./AxiosClient";

class ListPosts {
    static getAllPosts() {
        const url = 'posts';
        return axiosClient.get(url)
    };
    static addPosts(params){
        const url = 'posts';
        return axiosClient.post(url, params)
    };

    static updateFavorite(id,params) {
        const url = `posts/${id}`;
        return axiosClient.patch(url, params);
      };

      static deletePost(id) {
        const url = `posts/${id}`;
        return axiosClient.delete(url);
      }
      static updatePost(id,params) {
        const url = `posts/${id}`;
        return axiosClient.patch(url, params);
      }
    
}
export default ListPosts;