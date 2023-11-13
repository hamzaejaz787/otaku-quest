const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const { setGlobalOptions } = require("firebase-functions/v2");

setGlobalOptions({ maxInstances: 10 });

const app = express();

const apiKey = process.env.RAWG_API_KEY;
const baseURL = "https://api.rawg.io/api/";

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Response from api" });
});

app.get("/games", async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}games?key=${apiKey}`);
    const games = response.data.results;
    res.status(200).json(games);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ error: "Cannot fetch data" });
  }
});

app.get("/recent-games", async (req, res) => {
  try {
    const response = await axios.get(
      `${baseURL}games?key=${apiKey}&ordering=-released`
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
      `${baseURL}games?key=${apiKey}&dates=2022-01-01,2023-12-31&ordering=popularity`
    );
    const games = response.data;

    res.status(200).json(games);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ error: "Cannot fetch data" });
  }
});

app.get("/highest-rated", async (req, res) => {
  try {
    const response = await axios.get(
      `${baseURL}games?key=${apiKey}&dates=2022-01-01,2023-12-31&ordering=-rating`
    );
    const gameInfo = response.data.results;
    res.status(200).json(gameInfo);
  } catch (error) {
    console.error(`Error fetching games: ${error}`);
    res.status(500).json({ error: "Cannot fetch games" });
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

app.get("/games/:id/screenshots", async (req, res) => {
  const gamePk = req.params.id;
  try {
    const response = await axios.get(
      `${baseURL}games/${gamePk}/screenshots?key=${apiKey}`
    );
    const gameInfo = response.data;
    res.status(200).json(gameInfo);
  } catch (error) {
    console.error(`Error fetching screenshots: ${error}`);
    res.status(500).json({ error: "Cannot fetch screenshots" });
  }
});

exports.app = onRequest(app);
