import { useEffect } from "react";
import { getTrendingGames } from "../data/Rawg";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

const TrendingGames = () => {
  const { data, isLoading, error } = getTrendingGames();

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  if (isLoading) return <Spinner />;

  return (
    <section className="p-8">
      <h1 className="text-white text-3xl font-bold mb-4">Popular Games</h1>
      <div className="grid grid-cols-fluid gap-6">
        {data &&
          data.map((game) => {
            const { id, name, background_image } = game;

            return (
              <div key={id} className="mb-8">
                <img src={background_image} className="max-w-xs" alt="" />
                <h1 className="text-white">{name}</h1>

                <Link
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="inline-block rounded-md border border-transparent bg-red-800 py-2 px-4 md:text-lg font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default TrendingGames;
