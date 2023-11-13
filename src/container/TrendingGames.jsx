import { useEffect } from "react";
import { getTrendingGames } from "../data/Rawg";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TrendingGames = () => {
  const { data, isLoading, error } = getTrendingGames();

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  if (isLoading) return <Spinner />;

  return (
    <section className="p-2 sm:p-8">
      <h1 className="text-white text-3xl font-bold mb-8 2xl:text-4xl">
        Popular Games
      </h1>

      <Swiper
        rewind={true}
        autoHeight={false}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          1600: {
            slidesPerView: 7,
            spaceBetween: 25,
          },
          1450: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 4,
          },
          200: {
            slidesPerView: 2,
          },
          300: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={10}
        slidesPerView={3}
      >
        {data &&
          data.results.map((game) => {
            const { id, name, background_image, rating, genres } = game;

            return (
              <SwiperSlide key={id}>
                <div className="relative">
                  <Link
                    to={`/games/game/${id}`}
                    onClick={() => window.scrollTo({ top: 0 })}
                    className="cursor-pointer"
                  >
                    <div className="card group max-w-xxs h-xs 2xl:h-sm 2xl:max-w-xs relative rounded-lg overflow-hidden">
                      <div className="h-full">
                        <img
                          src={background_image}
                          className="h-full object-cover"
                          alt={`${name} cover`}
                        />
                      </div>

                      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 transition-all duration-200 ">
                        <div className="h-full flex flex-col justify-end items-start p-2 ">
                          <div className="flex items-start justify-between w-full">
                            <h1 className="text-white md:text-lg font-semibold text-left">
                              {name}
                            </h1>
                            <span className="block ml-2 bg-white py-1 px-2 text-xs rounded-full">
                              {rating ? rating : ""}
                            </span>
                          </div>

                          <p className="text-white text-xs md:text-sm my-2">
                            {genres.map((genre) => genre.name).join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        <div className="trending-navigation">
          <div className="btn-next swiper-controls absolute top-0 right-0 z-10 group rounded-tr-lg rounded-br-lg px-1">
            <FaChevronRight
              size={35}
              className="text-red-500 group-hover:text-red-700 transition-all duration-200 cursor-pointer"
            />
          </div>

          <div className="btn-prev swiper-controls absolute top-0 left-0 z-10 group rounded-tl-lg rounded-bl-lg px-1">
            <FaChevronLeft
              size={35}
              className="text-red-500 group-hover:text-red-700 transition-all duration-200 cursor-pointer"
            />
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default TrendingGames;
