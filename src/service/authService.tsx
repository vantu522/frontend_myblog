import axios from "axios";
import { API_ENDPOINT } from "../configs/apiConfig";


export interface LoginResponse {
  status: number;
  success: boolean;
  message: string;
  data: {
    access_token: string;
    expire_in: number;
    auth_type: string;
  };
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_ENDPOINT.BASE}/${API_ENDPOINT.AUTH.LOGIN}`, { email, password });

  if (response.data.success) {
    const { access_token, auth_type } = response.data.data;

    // Lưu token vào localStorage
    localStorage.setItem("token", access_token);
    localStorage.setItem("auth_type", auth_type);

    return response.data;
  } else {
    throw new Error(response.data.message || "Đăng nhập thất bại");
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("auth_type");
};
