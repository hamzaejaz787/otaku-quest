import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../data/Rawg";
import { toast } from "react-toastify";
import Spinner from "./Spinner";
import parse from "html-react-parser";

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
  } = data;

  return (
    <>
      <div className="cover-image">
        <img
          src={background_image || background_image_additional || ""}
          alt={`${name} background`}
          className="w-full"
        />
      </div>

      <div className="px-9 sm:px-16 py-4">
        <h1 className="text-white text-3xl">{name || name_original}</h1>
        {/* <p className="text-gray-300">{description}</p> */}
        <div className="text-gray-300">{parse(description)}</div>
      </div>
    </>
  );
};

export default GameInfo;
