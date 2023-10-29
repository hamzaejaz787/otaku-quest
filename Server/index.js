const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const axios = require("axios");

const app = express();

const port = process.env.PORT || 3000;
const apiKey = process.env.RAWG_API_KEY;
const baseURL = "https://api.rawg.io/api/";

app.use(cors());
app.use(express.json());

app.get("/recent-anime", async (req, res) => {
  try {
    const response = await axios.get(
      `${baseURL}games?key=${apiKey}&dates=2019-10-10,2020-10-10&ordering=-added&page_size=10`
    );
    const games = response.data.results;

    res.status(200).json(games);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ error: "Cannot fetch data" });
  }
});

app.get("/popular-games", async (req, res) => {
  try {
    const response = await axios.get(
      `${baseURL}games?key=${apiKey}&ordering=popular&page_size=14`
    );
    const games = response.data.results;

    res.status(200).json(games);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ error: "Cannot fetch data" });
  }
});

app.get("/game/:id", async (req, res) => {
  const gameId = req.params.id;

  try {
    const response = await axios.get(`${baseURL}games/${gameId}?key=${apiKey}`);
    const gameInfo = response.data;

    res.status(200).json(gameInfo);
  } catch (error) {
    console.error("Error fetching game information: ", error);
    res.status(500).json({ error: "Cannot fetch game information" });
  }
});

app.listen(port, () => {
  console.log("Server is running");
});
