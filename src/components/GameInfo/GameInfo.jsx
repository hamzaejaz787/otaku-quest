import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../data/Rawg";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import parse from "html-react-parser";
import "./game-info.css";

const GameInfo = () => {
  const params = useParams();
  const { data, error, isLoading } = getGameById(params.id);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  if (isLoading) return <Spinner />;

  const {
    name,
    name_original,
    description,
    background_image,
    background_image_additional,
    rating_top,
    released,
    developers,
    metacritic,
    genres,
    stores,
    platforms,
    esrb_rating,
    website,
  } = data;

  return (
    <>
      <div
        style={{
          "--image-url": `url(${
            background_image || background_image_additional
          })`,
        }}
        className={`image-wrapper absolute top-0 left-0 w-full h-full bg-[image:var(--image-url)] bg-cover bg-no-repeat `}
      ></div>

      <div className="relative game-info__content w-full h-full px-9 sm:px-16 py-4 z-10">
        <h1 className="text-white text-3xl">{name || name_original}</h1>

        <div className="text-gray-300 mt-6">{parse(description)}</div>
      </div>
    </>
  );
};

export default GameInfo;
