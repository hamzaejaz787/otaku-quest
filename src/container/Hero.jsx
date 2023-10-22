import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { getRecentAnime } from "../data/Kitsu";
import Spinner from "../components/Spinner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

const Hero = () => {
  const { data, error, isLoading } = getRecentAnime();
  const pagination = { clickable: true };

  useEffect(() => {
    if (error) return toast.error(error.message);
  }, [error]);

  return (
    <>
      <Swiper
        loop={true}
        pagination={pagination}
        autoHeight={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data &&
          data.map((anime) => {
            const { titles, posterImage, synopsis, status, showType } =
              anime.attributes;
            return (
              <SwiperSlide
                key={anime.id}
                className="slide cursor-grab active:cursor-grabbing"
              >
                <div className="flex flex-col-reverse sm:flex-row justify-between items-center p-4 mb-8">
                  <div className="slide-content w-full md:w-7/12 text-white space-y-4 pr-3">
                    <h1 className="text-2xl md:text-4xl font-semibold font-montserrat">
                      {titles.en_jp != null ? titles.en_jp : titles.en}
                    </h1>
                    <div className="flex items-center">
                      <span className="text-xs py-1 px-2 bg-gray-500 text-black mr-2 capitalize">
                        {showType}
                      </span>
                      <em className="text-gray-500 text-sm capitalize">
                        {status}
                      </em>
                    </div>
                    <p className="text-sm sm:text-base">
                      {synopsis ? synopsis.slice(0, 100) + "..." : "N/A"}
                    </p>

                    <Link className="inline-block rounded-md border border-transparent bg-red-800 py-2 px-4 md:text-lg font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200">
                      Details
                    </Link>
                  </div>

                  <div className="w-full md:w-9/12 h-60 sm:h-5px mb-4 md:m-auto slide-img">
                    <img
                      src={posterImage.large}
                      alt=""
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

      {isLoading && <Spinner />}
    </>
  );
};

export default Hero;