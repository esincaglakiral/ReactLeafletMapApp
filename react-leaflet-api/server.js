const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database/models");

const { Markers } = require("./database/models");

// Express.js server oluşturma
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// VERİTABANINA VERİ EKLEME

app.post("/api/markers", async (req, res) => {
  const { latitude, longitude, description, isActive } = req.body;

  try {
    const newMarker = await Markers.create({
      latitude,
      longitude,
      description,
      isActive,
    });

    res.status(200).json(newMarker);
  } catch (error) {
    console.log(error);
  }
});

// VERİ TABANINDAKİ VERİLERİ GÜNCELLEME

app.put("/api/markers/:id", async (req, res) => {
  const id = req.params.id;
  const { latitude, longitude, description, isActive } = req.body;

  try {
    const updatedMarker = await Markers.update(
      {
        latitude,
        longitude,
        description,
        isActive,
      },
      {
        where: {
          id,
        },
        returning: true,
        plain: true,
      }
    );

    res.status(200).json(updatedMarker[1]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

// VERİ TABANINDAKİ VERİLERİ SİLME

app.delete("/api/markers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedId = await Markers.destroy({
      where: {
        id,
      },
    });

    res.status(200).json(id);
  } catch (error) {
    console.log(error);
  }
});

// VERİ TABANINDAKİ VERİLERİ ALMA

app.get("/api/markers", async (req, res) => {
  try {
    const markers = await Markers.findAll();

    res.status(200).json(markers);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/markers/:markerId", async (req, res) => {
  const { markerId } = req.params;
  try {
    const marker = await Markers.findOne({
      where: {
        id: markerId,
      },
    });

    res.status(200).json(marker);
  } catch (error) {
    console.log(error);
  }
});

db.sequelize.sync({ force: false }).then(() => {
  // eslint-disable-next-line no-console

  console.log("Connected to DB");

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
