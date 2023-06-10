import axiosClient from "./AxiosClient";

class ListUsers {
    static getAllUsers(){
        const url = "users";
        return axiosClient.get(url)
    };
    static updateUsers(param){
        const url = `users/${param?.idActive?.id}`;
        return axiosClient.patch(url,{active:param.isActive});
    };
}

export default ListUsers;