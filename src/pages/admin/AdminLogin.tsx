
import { useState } from "react";
import { login } from "../../service/authService";
import {toast} from "react-toastify";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
  
    if (!email || !password) {
      setError("Vui lòng nhập cả email và mật khẩu.");
      
      return;
    }
  
    try {
      const data = await login(email, password);
      console.log("Đăng nhập thành công:", data);
      
      toast.success("Đăng nhập thành công!");
      window.location.href = "/admin"; // Chuyển hướng sau khi đăng nhập
    } catch (err) {
      setError("Đăng nhập thất bại, vui lòng kiểm tra lại email/mật khẩu.");
      console.error("Lỗi đăng nhập:", err);
    }
  };
 
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng nhập Admin</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none rounded-t-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-b-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none sm:text-sm"
              />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "👁" : "👁‍🗨"}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
