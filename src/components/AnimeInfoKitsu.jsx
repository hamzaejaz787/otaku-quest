import { useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { FaEye, FaHeart, FaMedal, FaPlus } from "react-icons/fa";
import { getAnimeById } from "../data/Kitsu";
import Spinner from "./Spinner";

const AnimeInfoKitsu = () => {
  const params = useParams();
  const { data, error, isLoading } = getAnimeById(params.id);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  if (isLoading) return <Spinner />;

  const {
    titles,
    synopsis,
    status,
    posterImage,
    coverImage,
    episodeCount,
    episodeLength,
    showType,
    startDate,
    ageRating,
    ageRatingGuide,
    popularityRank,
    favoritesCount,
    userCount,
  } = data.attributes;

  //Format date
  const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="w-full">
        <img src={coverImage?.large || coverImage?.original || ""} alt="" />
      </div>

      <div className="px-16 space-y-8">
        <div className="flex flex-col items-start sm:flex-row  h-full gap-8">
          <img src={posterImage?.small || posterImage?.original} alt="" />

          <div className="space-y-4">
            <h1 className="text-white text-4xl">{titles.en || titles.en_jp}</h1>

            <div className="flex items-center">
              <span className="flex items-center px-2 font-bold text-gray-800 bg-red-300 text-sm rounded-tl-md rounded-bl-md">
                {ageRating || "N/A"}
              </span>
              <span className="flex items-center px-2 text-gray-800 bg-yellow-300 text-sm">
                <FaMedal className="mr-1" /> - {popularityRank || "N/A"}
              </span>
              <span className="flex items-center px-2 bg-green-400 text-gray-800 text-sm">
                <FaHeart className="mr-1" /> - {favoritesCount || "N/A"}
              </span>
              <span className="flex items-center px-2 text-gray-800 bg-fuchsia-300 text-sm rounded-tr-md rounded-br-md">
                <FaEye className="mr-1" /> - {userCount || "N/A"}
              </span>
            </div>

            <p className="text-gray-300">{synopsis}</p>

            <button className="flex items-center justify-between rounded-full border border-transparent bg-red-800 py-2 px-4 font-medium text-gray-200 hover:bg-red-600 transition-all duration-200">
              Add To List <FaPlus className="ml-2" />
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-white text-lg font-bold">More Details:</h4>
        </div>
      </div>
    </>
  );
};

export default AnimeInfoKitsu;
