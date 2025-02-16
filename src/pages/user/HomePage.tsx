import decor from "../../assets/images/BAN-LAM-VIEC-TOI-GIAN-3.jpg.webp";
import logo from "../../assets/images/decor-home.jpg";
import ImageSlider from "../../components/Slider";
import Chill from '../../assets/images/chill.webp'

const HomePage = () => {
  const images =[logo,decor,logo,logo,decor,Chill];


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

        <div className="bg-white-300 flex  justify-center cursor-pointer  ">
          {/* Anh nen */}
          <div className=" w-1/3">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
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
                  <span className="text-s">Thứ 3 tháng 10 năm 2024</span>
                </div>
              </div>
              {/* Nội dung bài viết */}
              <div className="py-5">
                <h1 className=" uppercase">
                  <b>PLAYING WITH PATTERNS</b>
                </h1>
                {/* Mô tả ngắn */}
                <p className="text-gray-700 mt-2 capitalize">
                  Create a blog post subtitle that summarizes <br /> your post
                  in a few short, punchy sentences and entices <br /> your
                  audience to continue reading....
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white-300 flex  justify-center  ">
          {/* Anh nen */}
          <div className=" w-1/3">
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
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
                  <span className="text-s">Thứ 3 tháng 10 năm 2024</span>
                </div>
              </div>
              {/* Nội dung bài viết */}
              <div className="py-5">
                <h1 className=" uppercase">
                  <b>PLAYING WITH PATTERNS</b>
                </h1>
                {/* Mô tả ngắn */}
                <p className="text-gray-700 mt-2 capitalize">
                  Create a blog post subtitle that summarizes <br /> your post
                  in a few short, punchy sentences and entices <br /> your
                  audience to continue reading....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-2">
          <ImageSlider images={images}/>

      </div>
    </div>
  );
};

export default HomePage;
