import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Fetch = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const apiURL =
      "https://api.jikan.moe/v4/top/anime?filter=airing&limit=12&sfw=true";

    axios
      .get(apiURL)
      .then((res) => {
        const animeData = res.data.data || [];
        console.log(animeData);
        setAnimeList(animeData);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }, []);

  return (
    <>
      {animeList.map((anime) => {
        const { mal_id, title_english, episodes, url, images, status, score } =
          anime;

        const jpgImageLarge = images.jpg.large_image_url;
        return (
          <div key={mal_id} className="text-white">
            <img src={jpgImageLarge} alt="" />
            <h1 className="text-2xl">{title_english}</h1>
            <h2>Episodes: {episodes != null ? episodes : "N/A"}</h2>
            <h3>Current Score: {score}</h3>
            <em className="inline-block text-gray-400 text-sm">{status}</em>
            <br />
            <a
              href={url}
              target="_blank"
              className="bg-white text-black cursor-pointer"
              rel="noopener noreferrer"
            >
              Visit MAL Page
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Fetch;
