import axiosClient from "./AxiosClient";

class ListUsers {
    static getAllUsers(param){
        const url = "users";
        return axiosClient.get(url)
    };
}

export default ListUsers;