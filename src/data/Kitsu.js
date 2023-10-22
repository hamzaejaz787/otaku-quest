import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseURL = "https://kitsu.io/api/edge/";

const executeQuery = (queryKey, endpoint) => {
  return useQuery(queryKey, async () => {
    const response = await axios.get(`${baseURL + endpoint}`).catch((err) => {
      console.log(err);
    });

    return response.data;
  });
};

const handleKitsuResponse = (queryKey, endpoint) => {
  const res = executeQuery(queryKey, endpoint);
  const data = res.data?.data;

  return { data: data, isLoading: res.isLoading, error: res.error };
};

export function getRecentAnime() {
  return handleKitsuResponse(
    ["recent-anime"],
    "anime?filter[status]=current&sort=-averageRating"
  );
}

export function getTrendingAnime() {
  return handleKitsuResponse(["trending-anime"], "trending/anime");
}

export function getAnimeById(id) {
  return handleKitsuResponse([`anime-${id}`], `anime/${id}`);
}
