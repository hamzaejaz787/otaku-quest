import { getGames } from "../data/Rawg";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

const Games = () => {
  const { data, isLoading, error } = getGames();

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  if (isLoading) return <Spinner />;
  return (
    <section className="p-4 grid grid-cols-fluid-2 gap-8 justify-center 2xl:gap-14 2xl:grid-cols-fluid-3">
      {data &&
        data.map((game) => {
          const { name, released, background_image, rating, id, metacritic } =
            game;

          const formattedDate = new Date(released).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <div
              key={id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={background_image}
                loading="lazy"
                alt=""
                className="h-xmd 2xl:h-xxl w-full object-cover object-center"
              />

              <div className="p-4">
                <div className="flex justify-between items-start my-2">
                  <Link
                    to={`/details/game/${id}`}
                    className="text-white text-2xl font-bold hover:text-gray-400 transition-all duration-200"
                  >
                    <h1>{name}</h1>
                  </Link>
                  {metacritic && (
                    <strong
                      className={`border text-sm py-1 px-2 rounded pointer-events-none ${
                        metacritic >= 80
                          ? "text-green-500 border-green-500"
                          : metacritic >= 51
                          ? "text-yellow-500 border-yellow-500"
                          : "text-red-500 border-red-500"
                      }`}
                    >
                      {metacritic}
                    </strong>
                  )}
                </div>
                <h2 className="text-white">
                  Rating: <span>{rating}</span>
                </h2>
                <h3 className="text-white">Relase Date: {formattedDate}</h3>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Games;
