import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnimeById } from "../data/Kitsu";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { FaEye, FaHeart, FaMedal, FaPlus } from "react-icons/fa";

const AnimeInfoKitsu = () => {
  const params = useParams();
  const { data, error, isLoading } = getAnimeById(params.id);

  useEffect(() => {
    if (error) return toast.error(error.message);
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
    <div>
      <div className="cover-image">
        <img src={coverImage?.large || coverImage?.original || ""} alt="" />
      </div>

      <div className="px-9 sm:px-16 pb-4">
        <div className="flex flex-col items-center sm:flex-row ">
          <img src={posterImage?.small || posterImage?.original} alt="" />

          <div className="sm:p-8">
            <h1 className="text-white text-3xl">{titles.en || titles.en_jp}</h1>

            <div className="flex items-center gap-x-1 my-2">
              <span className="flex items-center text-gray-800 bg-purple-300 px-1 text-sm rounded-tl-md rounded-bl-md">
                {ageRating || "N/A"}
              </span>
              <span className="flex items-center text-gray-800 bg-yellow-300 px-1 text-sm">
                <FaMedal className="mr-1" /> - {popularityRank || "N/A"}
              </span>
              <span className="flex items-center bg-green-400 text-gray-800 px-1 text-sm">
                <FaHeart className="mr-1" /> - {favoritesCount || "N/A"}
              </span>
              <span className="flex items-center text-gray-800 bg-cyan-300 px-1 text-sm rounded-tr-md rounded-br-md">
                <FaEye className="mr-1" /> - {userCount || "N/A"}
              </span>
            </div>

            <p className="text-gray-300">{synopsis}</p>

            <button className="flex items-center justify-between rounded-full border mt-3 border-transparent bg-red-800 py-2 px-4 font-medium text-gray-200 hover:bg-red-600 transition-all duration-200">
              Add To List <FaPlus className="ml-2" />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-white text-lg font-bold">Anime Details</h4>
          <h5 className="text-white font-bold">
            English:
            <span className="text-gray-200 font-normal ml-2">
              {titles.en || "N/A"}
            </span>
          </h5>

          <h5 className="text-white font-bold">
            Japanese (Romaji):
            <span className="text-gray-200 font-normal ml-2">
              {titles.en_jp || "N/A"}
            </span>
          </h5>

          <h5 className="text-white font-bold">
            Japanese:
            <span className="text-gray-200 font-normal ml-2">
              {titles.ja_jp || "N/A"}
            </span>
          </h5>

          <h5 className="text-white font-bold">
            Type:
            <span className="text-gray-200 font-normal ml-2 capitalize">
              {showType || "N/A"}
            </span>
          </h5>

          <h5 className="text-white font-bold">
            Status:
            <span className="text-gray-200 font-normal ml-2 capitalize">
              {status || "N/A"}
            </span>
          </h5>

          <h5 className="text-white font-bold">
            Age Rating:
            <span className="text-gray-200 font-normal ml-2 capitalize">
              {ageRatingGuide || "N/A"}
            </span>
          </h5>

          <h5 className="text-white font-bold">
            Aired:
            <span className="text-gray-200 font-normal ml-2">
              {formattedStartDate || "N/A"}
            </span>
          </h5>

          <h5 className="text-white font-bold">
            Episodes:
            <span className="text-gray-200 font-normal ml-2">
              {episodeCount || "N/A"}
            </span>
          </h5>

          <h5 className="text-white font-bold">
            Episode(s) Length:
            <span className="text-gray-200 font-normal ml-2">
              {episodeLength + " minutes" || "N/A"}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfoKitsu;
