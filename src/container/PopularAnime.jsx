import { Link, Outlet, useParams } from "react-router-dom";
import { getMostPopular } from "../data/Jikan";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const PopularAnime = () => {
  const { id } = useParams();
  const { data, error, isLoading } = getMostPopular();

  useEffect(() => {
    if (error) return toast.error(error.message);
  }, [error]);

  if (isLoading) return <Spinner />;

  return (
    <>
      {id ? (
        <Outlet />
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 py-12 px-6 sm:px-10 2xl:px-20">
          {data &&
            data.map((anime) => {
              const {
                mal_id,
                images,
                title,
                title_english,
                type,
                popularity,
                rating,
                episodes,
                year,
                season,
              } = anime;

              const { image_url, large_image_url } = images.webp;
              return (
                <div
                  key={mal_id}
                  className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex justify-between flex-col"
                >
                  <img
                    src={large_image_url || image_url}
                    alt={`${title || title_english} cover`}
                    className="w-full h-[250px] object-cover object-center"
                  />

                  <Link
                    to={`/anime/jikan/${mal_id}`}
                    className="text-white text-2xl p-4 text-center font-bold hover:text-red-500 transition-all duration-200"
                  >
                    <h1>{title || title_english}</h1>
                  </Link>
                </div>
              );
            })}
        </section>
      )}
    </>
  );
};

export default PopularAnime;
