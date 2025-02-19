import axios from "axios"
import { API_ENDPOINT } from "../configs/apiConfig"

export interface postResponse{
    id: string,
    content:string,
    author:string,
    title:string,
    status:string,
    image:string,
    created_at:string,
    updated_at:string
 
}

export const getAllPosts = async (): Promise<postResponse[]> =>{
    try{
        const response = await axios.get<postResponse[]>(`${API_ENDPOINT.BASE}/${API_ENDPOINT.POST.GETALLPOST}`);
        console.log(response.data);

        return  response.data;
    } catch(error){
        console.error('Lỗi khi lấy danh sách bài viết: ',error)
        throw error;
    }

}
