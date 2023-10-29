import { getRecentGames } from "../data/Rawg";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const Games = () => {
  const { data, isLoading, error } = getRecentGames();

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  if (isLoading) return <Spinner />;
  return (
    <section className="p-4 grid grid-cols-fluid gap-8">
      {data &&
        data.map((game) => {
          const { name, released, background_image, rating, id } = game;

          const formattedDate = new Date(released).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <div key={id} className="mb-8">
              <img src={background_image} className="max-w-xs" alt="" />
              <h1 className="text-white">{name}</h1>
              <h2 className="text-white">
                Rating: <span>{rating}</span>
              </h2>
              <h3 className="text-white">Relase Date: {formattedDate}</h3>
            </div>
          );
        })}
    </section>
  );
};

export default Games;
