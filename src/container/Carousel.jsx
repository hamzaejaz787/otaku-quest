import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import Fetch from "../data/Fetch";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

const Carousel = () => {
  const {
    data: animeList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["animeList"],
    queryFn: Fetch,
  });
  const pagination = { clickable: true };

  useEffect(() => {
    if (error) return toast.error(error.message);
  }, [error]);

  return (
    <>
      <Swiper
        rewind={true}
        pagination={pagination}
        autoHeight={true}
        lazy={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {animeList &&
          animeList.map((anime) => {
            const { mal_id, title, title_english, images, synopsis, status } =
              anime;
            const imageLarge = images.webp.large_image_url;

            return (
              <SwiperSlide
                key={mal_id}
                className="cursor-grab active:cursor-grabbing"
              >
                <div className="flex flex-col md:flex-row justify-between items-center py-10 px-8">
                  <img
                    src={imageLarge}
                    alt=""
                    className="w-full min-h-100 sm:w-auto"
                    loading="lazy"
                  />

                  <div className="w-full h-full text-white pt-10  md:p-12">
                    <h1 className="text-4xl font-bold font-montserrat mb-2">
                      {title_english != null ? title_english : title}
                    </h1>
                    <em className="text-gray-500">{status}</em>
                    <p className="mt-4">
                      {synopsis ? synopsis.slice(0, 200) + "..." : "N/A"}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

      {isLoading ? <Spinner /> : ""}
    </>
  );
};

export default Carousel;
