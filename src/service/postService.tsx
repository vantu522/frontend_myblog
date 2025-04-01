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
    const response = await axios.post<Post>(`${API_ENDPOINT.BASE}/post/create`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Lỗi khi tạo bài viết:", error);
    throw error;
  }
};


export const updatePost = async (id:string, formData:FormData):Promise<Post> =>{
  try{
    const response = await axios.put<Post>(`${API_ENDPOINT.BASE}/post/update/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch(error){
    console.error("Lỗi khi cập nhật bài viết", error);
    throw error;
  }
}

export const deletePost = async(id:string):Promise<Post> =>{
  try{
    const response = await axios.delete<Post>(`${API_ENDPOINT.BASE}/post/delete/${id}`);
    return response.data;
  } catch(error){
    console.error("Có lỗi cảy ra khi xoá bài viết",error);
    throw new Error("Không thể xóa bài viết.");
  }
}





