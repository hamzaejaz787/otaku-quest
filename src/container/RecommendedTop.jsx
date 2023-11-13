import { Link, Outlet, useParams } from "react-router-dom";
import { getMostPopular } from "../data/Jikan";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const RecommendedTop = () => {
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
        <section className="p-4 grid grid-cols-fluid gap-8 justify-center 2xl:gap-14 2xl:grid-cols-fluid-3">
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

              const { image_url, small_image_url, large_image_url } =
                images.jpg;
              return (
                <div
                  key={mal_id}
                  className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex justify-between"
                >
                  <img
                    src={image_url || small_image_url || large_image_url}
                    alt={`${title || title_english} cover`}
                    className="max-w-xxs"
                  />

                  <div>
                    <Link
                      to={`/anime/jikan/${mal_id}`}
                      className="text-white text-2xl font-bold hover:text-gray-400 transition-all duration-200"
                    >
                      <h1>{title || title_english}</h1>
                    </Link>
                  </div>
                </div>
              );
            })}
        </section>
      )}
    </>
  );
};

export default RecommendedTop;
