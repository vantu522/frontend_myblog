const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     

      {/* Nội dung chính */}
      <main className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mx-auto h-32 w-32 rounded-full bg-gray-200 mb-6 overflow-hidden border-4 border-white shadow-lg">
            <div className="h-full w-full flex items-center justify-center text-4xl font-bold text-gray-500">
              JD
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Duong Van Tu</h1>
          <p className="text-lg text-gray-600 mb-4">Web Developer & Blogger</p>
          <div className="max-w-lg mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Tôi viết về công nghệ, phát triển web và những trải nghiệm trong cuộc sống.
              Rất vui được kết nối với mọi người!
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Phần giới thiệu */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Về tôi</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                Xin chào! Tôi là Tu, một lập trình viên web với niềm đam mê xây dựng những sản phẩm tuyệt vời.
              </p>
              <p className="text-gray-700">
                Với tính cách hòa đồng và thân thiện, tôi luôn mong muốn học hỏi và chia sẻ kiến thức với cộng đồng.
              </p>
            </div>
          </section>

          {/* Kỹ năng */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Kỹ năng</h2>
            <div className="flex flex-wrap gap-3">
              {["React", "Spring Boot", "TypeScript", "Tailwind CSS", "Node.js", "Next.js"].map((skill) => (
                <span
                  key={skill}
                  className="inline-block px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Bài viết nổi bật */}
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Bài viết nổi bật</h2>
            <div className="space-y-4">
              {[
                { title: "Xây dựng ứng dụng với React và Spring Boot", date: "15/03/2023" },
                { title: "TypeScript cho người mới bắt đầu", date: "28/02/2023" },
                { title: "Tối ưu hiệu suất với Tailwind CSS", date: "10/02/2023" }
              ].map((post, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-gray-800">{post.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

    </div>
  )
}

export default About