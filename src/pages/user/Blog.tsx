import { CalendarIcon, UserIcon, TagIcon } from "lucide-react"

const BlogPage = () => {
  const posts = [
    {
      title: "10 Lời khuyên để trở thành lập trình viên giỏi hơn",
      excerpt: "Khám phá những bí quyết giúp bạn nâng cao kỹ năng lập trình và phát triển sự nghiệp...",
      date: "2023-06-15",
      author: "Nguyễn Văn A",
      category: "Lập trình",
    },
    {
      title: "Xu hướng công nghệ nổi bật năm 2023",
      excerpt: "Tìm hiểu về những công nghệ mới nhất đang định hình tương lai của ngành IT...",
      date: "2023-06-10",
      author: "Trần Thị B",
      category: "Công nghệ",
    },
    {
      title: "Cách tối ưu hóa hiệu suất website của bạn",
      excerpt: "Học cách cải thiện tốc độ tải trang và trải nghiệm người dùng trên website của bạn...",
      date: "2023-06-05",
      author: "Lê Văn C",
      category: "Web Development",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">My Tech Blog</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white shadow rounded-lg mb-6 overflow-hidden transition duration-300 ease-in-out hover:shadow-lg"
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition duration-300 ease-in-out">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <time dateTime={post.date}>{post.date}</time>
                      <UserIcon className="h-4 w-4 ml-4 mr-1" />
                      <span>{post.author}</span>
                      <TagIcon className="h-4 w-4 ml-4 mr-1" />
                      <span>{post.category}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About Me</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Xin chào! Tôi là một lập trình viên đam mê công nghệ và chia sẻ kiến thức. Blog này là nơi tôi chia sẻ
                  những hiểu biết và kinh nghiệm của mình về lập trình và công nghệ mới.
                </p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
                <ul className="space-y-2">
                  {["Lập trình", "Công nghệ", "Web Development", "Mobile App", "AI & Machine Learning"].map(
                    (category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-800 text-sm transition duration-300 ease-in-out"
                        >
                          {category}
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BlogPage

