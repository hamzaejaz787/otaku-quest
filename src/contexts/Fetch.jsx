import axios from "axios";

const Fetch = async () => {
  const apiURL = "https://api.jikan.moe/v4/seasons/now?limit=10";
  const response = await axios.get(apiURL);
  return response.data.data;
};

export default Fetch;
