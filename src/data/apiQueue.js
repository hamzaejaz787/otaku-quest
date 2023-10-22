import PQueue from "p-queue";
import axios from "axios";
const jikanQueue = new PQueue({
  concurrency: 1,
  intervalCap: 1,
  interval: 900,
});

const baseURL = "https://api.jikan.moe/v4/";

export const apiQueueRequest = async (endpoint) => {
  return jikanQueue.add(async () => {
    return await axios
      .get(`${baseURL + endpoint}`)
      .catch((err) => console.log(err));
  });
};
