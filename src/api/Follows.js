import axiosClient from "./AxiosClient";

class Follows {
    static getFollow(){
        const url = 'follows';
        return axiosClient.get(url);
    };

    static addFollow(param){
        const url = `follows/${param.userId}`;
        return axiosClient.patch(url, param);
    };
    
    
}
export default Follows;

