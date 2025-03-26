import axios from "axios"
import { API_ENDPOINT } from "../configs/apiConfig"
import { Post } from "./type.ts/post";
import { UploadFile } from "antd";


export const getAllPosts = async (): Promise<Post[]> =>{
    try{
        const response = await axios.get<Post[]>(`${API_ENDPOINT.BASE}/${API_ENDPOINT.POST.GETALLPOST}`);

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

export const createPost = async (formData: FormData): Promise<Post> => {
  try {
    const response = await axios.post<Post>(`${API_ENDPOINT.BASE}/post/create-post`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    console.error("Lỗi khi tạo bài viết:", error);
    throw error;
  }
};






