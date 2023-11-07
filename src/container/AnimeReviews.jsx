import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { getAnimeReviews } from "../data/Jikan";

const AnimeReviews = () => {
  const { data, error, isLoading } = getAnimeReviews();

  console.log(data);
  return <></>;
};

export default AnimeReviews;
