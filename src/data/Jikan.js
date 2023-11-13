import { useQuery } from "@tanstack/react-query";
import { apiQueueRequest } from "./apiQueue";

function ExecuteQuery(queryKey, endpoint) {
  return useQuery(queryKey, async () => {
    return await apiQueueRequest(endpoint);
  });
}

export function handleJikanResponse(queryKey, endpoint) {
  const res = ExecuteQuery(queryKey, endpoint);
  const data = res.data?.data.data;
  return { data: data, isLoading: res.isLoading, error: res.error };
}

export function getTopAiring() {
  return handleJikanResponse(["top-airing"], "top/anime?filter=airing&limit=8");
}

export function getMostPopular() {
  return handleJikanResponse(["most-popular"], "top/anime?filter=bypopularity");
}

export function getAnimeReviews() {
  return handleJikanResponse(["top-anime-reviews"], "reviews/anime");
}

export function getTopMovies() {
  return handleJikanResponse(
    ["top-movies"],
    "top/anime?type=movie&filter=bypopularity&limit=10"
  );
}

export function getTopUpcoming() {
  return handleJikanResponse(
    ["top-upcoming"],
    "top/anime?filter=upcoming&limit=8"
  );
}

export function getAnimeByMalId(id) {
  return handleJikanResponse([`anime-${id}`], `anime/${id}`);
}

export function getAnimeByGenre(mal_id) {
  return handleJikanResponse(
    [`anime-by-genre-${mal_id}`],
    `anime?genres=${mal_id}&limit=15`
  );
}

export function getRandomAnime() {
  return handleJikanResponse(["random-anime"], "random/anime");
}

export function getAnimeSearch(name, param) {
  let queryString = "";

  if (param === "title") {
    queryString = `q=${name}`;
  } else {
    queryString = `letter=${name}`;
  }

  return handleJikanResponse(
    [`anime-search${name}`],
    `anime?${queryString}&sfw=true&order_by=rank&limit=20`
  );
}
