import { useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { getGames } from "../data/Rawg";
import Spinner from "../components/Spinner";

const Games = () => {
  const { data, isLoading, error } = getGames();

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  if (isLoading) return <Spinner />;
  return (
    <section className="p-4 grid gap-8 justify-center 2xl:gap-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
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
                className="h-[250px] w-full object-cover object-center"
              />

              <div className="px-4 py-8 ">
                <div className="flex gap-4 justify-between items-start">
                  <Link
                    to={`/games/game/${id}`}
                    className="text-white text-2xl font-bold hover:text-red-500 transition-all duration-200"
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
                <h2 className="text-gray-200 pt-2 font-semibold">
                  Rating: <span className="font-normal">{rating}</span>
                </h2>
                <h3 className="text-gray-200 font-semibold">
                  Relase Date:{" "}
                  <span className="font-normal">{formattedDate}</span>
                </h3>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Games;
