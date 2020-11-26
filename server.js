import express from "express";
import mongoose from "mongoose";
import cards from "./dbCards.js";
import cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:tinderclone2357@cluster0.ypuqo.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middle wears
app.use(express.json());
app.use(cors());

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API EndPoints
app.get("/", (req, res) => {
  res.status(200).send("Hellow, MERN Stack!");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listner
app.listen(port, () => console.log(`listening on localhost: ${port}`));
