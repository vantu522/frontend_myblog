import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "@/service/postService";
import { Post } from "@/service/type.ts/post";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (error) {
        console.error("Failed to load post");
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
