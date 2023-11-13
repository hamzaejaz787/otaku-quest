import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById, getGameScreenshots } from "../../data/Rawg";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import parse from "html-react-parser";
import "./game-info.css";

const GameInfo = () => {
  const params = useParams();
  const { data, error, isLoading } = getGameById(params.id);
  const {
    data: screenshotsData,
    error: screenshotsError,
    isLoading: screenshotsLoading,
  } = getGameScreenshots(params.id);
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    if (error) toast.error(error.message);
    if (screenshotsError) toast.error(screenshotsError.message);

    if (!screenshotsLoading && screenshotsData) {
      setScreenshots(screenshotsData.results);
    }
  }, [error, screenshotsError, screenshotsLoading, screenshotsData]);

  if (isLoading || screenshotsLoading) return <Spinner />;

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
  const backgroundImage = background_image || background_image_additional;

  return (
    <>
      <div
        style={{
          "--image-url": `url(${backgroundImage})`,
        }}
        className={`image-wrapper absolute top-0 left-0 w-full h-full bg-[image:var(--image-url)] bg-cover bg-top bg-no-repeat `}
      ></div>

      <div className="relative game-info__content w-full h-full px-9 sm:px-16 py-4 z-10">
        <h1 className="text-white text-3xl">{name || name_original}</h1>

        <div className="text-gray-300 mt-6">{parse(description)}</div>

        {screenshots.length > 0 && (
          <div className="mt-6">
            <h2 className="text-white text-xl font-bold mb-2">Screenshots</h2>
            <div className="flex flex-wrap">
              {screenshots.map((screenshot) => (
                <img
                  key={screenshot.id}
                  src={screenshot.image}
                  loading="lazy"
                  alt={`${name || name_original} screenshot`}
                  className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 h-auto mb-2"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GameInfo;
