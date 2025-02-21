

const About = () => {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-blue-500 h-32 sm:h-48"></div>
            <div className="px-4 sm:px-6 -mt-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="sm:flex sm:items-center sm:justify-between">
                  <div className="sm:flex sm:space-x-5">
                    <div className="flex-shrink-0">
                      <div className="mx-auto h-20 w-20 rounded-full bg-gray-300 border-4 border-white flex items-center justify-center text-2xl font-bold text-gray-500">
                        JD
                      </div>
                    </div>
                    <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                      <p className="text-xl font-bold text-gray-900 sm:text-2xl">Duong Van Tu</p>
                      <p className="text-sm font-medium text-gray-600">Web Developer</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-gray-700 text-sm">
                  <p>
                    Xin chào mọi người nhé
                  </p>
                  <p className="mt-4">
                   Tôi có tính cách hoà đồng thân thiện, nhiệt tình với mọi người xung quanh tôi
                  </p>
                </div>
                <div className="mt-6">
                  <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["React", "Spring boot", "TypeScript", "Tailwind CSS", "Node.js"].map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default About
  
  