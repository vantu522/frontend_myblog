import { useEffect, useState } from "react"
import { getAllPosts } from "@/service/postService"
import { EyeIcon, PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline"
import { Post } from "@/service/type.ts/post"
import PostForm from "./PostForm"

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [isOpenForm, setIsOpenForm] = useState(false)
  const [editingPost, setEditingPost] = useState<Post | null>(null)

  const handleOpenCreateForm = () => {
    setEditingPost(null) // Reset dữ liệu khi tạo mới
    setIsOpenForm(true)
  }

  const handleOpenEditForm = (post: Post) => {
    setEditingPost(post)
    setIsOpenForm(true)
  }

  const handleCloseForm = () => {
    setIsOpenForm(false)
    setEditingPost(null)
  }

  const handleSubmit = async (data: Post) => {
    console.log("Dữ liệu bài viết:", data)
    handleCloseForm()
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts()
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
      
      <button 
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center mb-4"
        onClick={handleOpenCreateForm}
      >
        <PlusIcon className="h-5 w-5 mr-1" />
        Thêm bài viết
      </button>

      <div className="overflow-x-auto">
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
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b flex justify-center items-center">
                    <img src={post.image} alt={post.title} className="w-12 h-12 object-cover rounded " />
                  </td>
                  <td className="py-2 px-4 border-b text-center">{post.title}</td>
                  <td className="py-2 px-4 border-b text-center">{post.author}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {post.content.length > 50 ? `${post.content.substring(0, 50)}...` : post.content}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span className={`inline-block px-2 py-1 text-xs rounded text-center ${
                      post.status === "published" ? "bg-green-500 text-white" : "bg-gray-400 text-white"
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b flex justify-center space-x-2">
                    <button className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button
                      className="p-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      onClick={() => handleOpenEditForm(post)}
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1 bg-red-500 text-white rounded hover:bg-red-600">
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
      </div>

      {isOpenForm && (
        <PostForm
          isOpen={isOpenForm}
          onClose={handleCloseForm}
          onSubmit={handleSubmit}
          mode={editingPost ? "edit" : "create"}
          initialData={editingPost || undefined}
        />
      )}
    </div>
  )
}

export default PostList
