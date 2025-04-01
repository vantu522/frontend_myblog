import { CalendarIcon, UserIcon, TagIcon, ArrowRightIcon } from "lucide-react"

const BlogPage = () => {
  const posts = [
    {
      title: "10 Lời khuyên để trở thành lập trình viên giỏi hơn",
      excerpt: "Khám phá những bí quyết giúp bạn nâng cao kỹ năng lập trình và phát triển sự nghiệp...",
      date: "15/06/2023",
      author: "Nguyễn Văn A",
      category: "Lập trình",
      readTime: "5 phút đọc"
    },
    {
      title: "Xu hướng công nghệ nổi bật năm 2023",
      excerpt: "Tìm hiểu về những công nghệ mới nhất đang định hình tương lai của ngành IT...",
      date: "10/06/2023",
      author: "Trần Thị B",
      category: "Công nghệ",
      readTime: "7 phút đọc"
    },
    {
      title: "Cách tối ưu hóa hiệu suất website của bạn",
      excerpt: "Học cách cải thiện tốc độ tải trang và trải nghiệm người dùng trên website của bạn...",
      date: "05/06/2023",
      author: "Lê Văn C",
      category: "Web Development",
      readTime: "4 phút đọc"
    },
  ]

  const categories = ["Lập trình", "Công nghệ", "Web Development", "Mobile App", "AI & Machine Learning"]

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
    
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Bài viết */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Bài viết mới nhất</h2>
              <p className="text-gray-600">Những chia sẻ mới nhất về công nghệ và lập trình</p>
            </div>

            <div className="space-y-8">
              {posts.map((post, index) => (
                <article key={index} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                        <span className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center text-sm text-gray-500">
                            <UserIcon className="h-4 w-4 mr-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center text-sm text-gray-500">
                            <TagIcon className="h-4 w-4 mr-1" />
                            {post.category}
                          </span>
                        </div>
                        <a 
                          href="#" 
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2 sm:mt-0 transition"
                        >
                          Đọc tiếp <ArrowRightIcon className="h-4 w-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Phân trang */}
            <div className="mt-10 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-md bg-blue-600 text-white">1</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-100">2</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-100">3</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-100">Next</button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* About Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                  <UserIcon className="h-6 w-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Tác giả</h3>
                  <p className="text-sm text-gray-600">Lập trình viên & Blogger</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Xin chào! Tôi viết về công nghệ, lập trình và những trải nghiệm trong ngành IT. Rất vui được kết nối với bạn!
              </p>
              <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium transition">
                Theo dõi
              </button>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Danh mục</h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-50 transition"
                    >
                      <span>{category}</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">24</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 mb-3">Nhận bài viết mới</h3>
              <p className="text-sm text-gray-600 mb-4">
                Đăng ký để nhận những bài viết mới nhất qua email
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="submit" 
                  className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>


    </div>
  )
}

export default BlogPage