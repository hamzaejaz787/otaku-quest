import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseURL = import.meta.env.VITE_FIREBASE_FUNCTIONS_URL;

const executeQuery = (queryKey, endpoint) => {
  return useQuery(queryKey, async () => {
    const response = await axios.get(`${baseURL + endpoint}`).catch((err) => {
      console.log(err);
      throw err;
    });

    return response.data;
  });
};

const handleRawgResponse = (queryKey, endpoint) => {
  const res = executeQuery(queryKey, endpoint);
  const data = res.data;

  return { data: data, isLoading: res.isLoading, error: res.error };
};

export function getRecentGames() {
  return handleRawgResponse(["recent-games"], "recent-games");
}

export function getTrendingGames() {
  return handleRawgResponse(["popular-games"], "popular-games");
}

export function getGameById(id) {
  return handleRawgResponse([`game-${id}`], `game/${id}`);
}
