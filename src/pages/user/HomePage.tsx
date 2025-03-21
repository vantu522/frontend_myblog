import decor from "../../assets/images/BAN-LAM-VIEC-TOI-GIAN-3.jpg.webp";
import logo from "../../assets/images/decor-home.jpg";
import ImageSlider from "../../components/Slider";
import Chill from '../../assets/images/chill.webp'
import { useState,useEffect } from "react";
import { getAllPosts } from "../../service/postService"
import moment from 'moment'
import { Post } from "@/service/type.ts/post";


const HomePage = () => {
  const images =[logo,decor,logo,logo,decor,Chill];
  const [posts, setPosts] = useState<Post[]>([])

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
    
      useEffect(() => {
        const fetchPosts = async () => {
          try {
            const data = await getAllPosts()
            console.log(data)
            setPosts(data)
          } catch (err) {
            setError("Không thể tải danh sách bài viết.")
          } finally {
            setLoading(false)
          }
        }
    
        fetchPosts()
      }, [])
    
      if (loading) return <p className="text-center py-4">Đang tải...</p>
      if (error) return <p className="text-center py-4 text-red-500">{error}</p>
    
  

  return (
    <div>
      <div className="w-full mt-0 flex items-center justify-center bg-white font-josefin">
        <img
          src={decor}
          alt="Decor"
          className="max-h-screen w-full object-contain"
        /> 
      </div>

      <div className="mt-5 border space-y-6">
        {posts.map((post) =>
            post.status === "public" && (
                 <div className="bg-white-300 flex  justify-center cursor-pointer  ">
              {/* Anh nen */}
              <div className=" w-1/3">
                <img src={post.image} alt="Logo" className="w-full h-full object-cover" />
              </div>

             {/* Bai viet */}
            <div className=" px-4 pl-5">
            <div className="mb-10">
              {/* Nội dung bài viết  */}
              <div className="w-2/3 flex pt-5">
                <img src={logo} alt="" className="w-8 h-8 rounded-full mr-2" />
                <div>
                  <h1>
                    <b>Admin</b>
                  </h1>
                  <span className="text-s">{moment(post.created_at).format("DD/MM/YY")}</span>
                </div>
              </div>
              {/* Nội dung bài viết */}
              <div className="py-5 cursor-pointer">
                <h1 className=" uppercase">
                  <b>{post.title}</b>
                </h1>
                {/* Mô tả ngắn */}
                <p className="text-gray-700 mt-2 capitalize">
                 {post.content}
                </p>
              </div>
            </div>
            </div>
                </div>
          
         

        ))}
       
      </div>

      <div className="px-2">
          <ImageSlider images={images}/>

      </div>

    </div>
  );
};

export default HomePage;
