import axios from "axios"
import { API_ENDPOINT } from "../configs/apiConfig"
import { Post } from "./type.ts/post";


export const getAllPosts = async (): Promise<Post[]> =>{
    try{
        const response = await axios.get<Post[]>(`${API_ENDPOINT.BASE}/${API_ENDPOINT.POST.GETALLPOST}`);
        console.log(response.data);

        return  response.data;
    } catch(error){
        console.error('Lỗi khi lấy danh sách bài viết: ',error)
        throw error;
    }

}

export const getPostById = async (id: string): Promise<Post> => {
    try{
        const response = await axios.get<Post>(`${API_ENDPOINT.BASE}/${API_ENDPOINT.POST}/${id}`)
        console.log(response.data)
        return response.data;
    } catch(error){
        console.error(`Lỗi khi lấy bài viết với ID`, error)
        throw error;
    }
}

export const createPost = async (postData:Omit<Post,"id">): Promise<Post> =>{
    try{
        const response = await axios.post<Post>(`${API_ENDPOINT.BASE}/${API_ENDPOINT.POST.CREATEPOST}`)
        return response.data
    } catch(error){
        console.error('Error  creating post.',error)
        throw error
    }
}
