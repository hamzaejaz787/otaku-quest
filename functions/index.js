/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
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

app.get("/recent-games", async (req, res) => {
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

exports.app = onRequest(app);
