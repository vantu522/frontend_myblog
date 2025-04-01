import { useEffect, useState } from "react";
import { Modal, message } from "antd";
import { getAllPosts, createPost, updatePost, deletePost } from "@/service/postService";
import { EyeIcon, PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Post } from "@/service/type.ts/post";
import PostForm from "./PostForm";
import DOMPurify from "dompurify";
import truncate from "html-truncate";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const MAX_LENGTH = 50; 

  const fetchPosts = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (err) {
      setError("Không thể tải danh sách bài viết.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleOpenCreateForm = () => {
    setEditingPost(null);
    setIsModalOpen(true);
  };

  const handleOpenEditForm = (post: Post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPost(null);
  };

 const handleSubmit = async (formData: FormData) => {
  try {
    if (editingPost) {
      await updatePost(editingPost._id, formData);
      message.success("Cập nhật bài viết thành công!");
    } else {
      await createPost(formData);
      message.success("Thêm bài viết thành công!");
    }
    handleCloseModal();
    fetchPosts();
  } catch (error) {
    message.error("Có lỗi xảy ra!");
  }
};
const handleDelete = async (id: string) => {
  try {
    await deletePost(id);  // Call the deletePost service
    message.success("Bài viết đã được xóa.");
    fetchPosts();  // Reload the list of posts
  } catch (error) {
    message.error("Có lỗi xảy ra khi xóa bài viết.");
  }
};


  if (loading) return <p className="text-center py-4">Đang tải...</p>;
  if (error) return <p className="text-center py-4 text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>

      <button
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center mb-4"
        onClick={handleOpenCreateForm}
      >
        <PlusIcon className="h-5 w-5 mr-1" />
        Thêm bài viết
      </button>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Ảnh</th>
            <th className="py-2 px-4 border-b">Tiêu đề</th>
            <th className="py-2 px-4 border-b">Tác giả</th>
            <th className="py-2 px-4 border-b">Nội dung</th>
            <th className="py-2 px-4 border-b">Trạng thái</th>
            <th className="py-2 px-4 border-b">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {posts.length > 0 ? (
            posts.map((post) => (
              <tr key={post._id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b flex justify-center items-center">
                  <img src={post.image} alt={post.title} className="w-12 h-12 object-cover rounded " />
                </td>
                <td className="py-2 px-4 border-b text-center">{post.title}</td>
                <td className="py-2 px-4 border-b text-center">{post.author}</td>
                <td
                  className="py-2 px-4 border-b text-center"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(truncate(post.content, MAX_LENGTH)),
                  }}
                />

                <td className="py-2 px-4 border-b text-center">
                  <span className={`px-2 py-1 text-xs rounded ${post.status === "published" ? "bg-green-500 text-white" : "bg-gray-400 text-white"}`}>
                    {post.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b flex justify-center space-x-2">
                  <button className="p-1 bg-yellow-500 text-white rounded hover:bg-yellow-600" onClick={() => handleOpenEditForm(post)}>
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button className="p-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => handleDelete(post._id)}>
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="py-4 px-4 text-center border-b">Không có bài viết nào.</td>
            </tr>
          )}
        </tbody>
      </table>

      <Modal title={editingPost ? "Chỉnh sửa bài viết" : "Thêm bài viết"} open={isModalOpen} onCancel={handleCloseModal} footer={null}>
        <PostForm initialData={editingPost} onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
};

export default PostList;
