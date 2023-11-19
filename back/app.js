const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

// Import models
const Fernet = require('./models/fernet.model');
const Cafe = require('./models/cafe.model');
const Arroz = require('./models/arroz.model');
const Pan = require('./models/pan.model');
const Gaseosa = require('./models/gaseosa.model');


// Middlewares
app.use(express.json());

// Config CORS
app.use(cors());

// Connect to database
const connectDB = require("./config/database");
connectDB();

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


// Api endpoints

// Fernet
app.get("/fernet", async (req, res) => {
  const fernet = await Fernet.find();
  res.json(fernet);
});

app.post("/fernet", async (req, res) => {
    const fernet = await Fernet.create(req.body);
    res.json(fernet);
});

app.delete("/fernet", async (req, res) => {
    const fernet = await Fernet.findOneAndDelete();
    res.json(fernet);
})

app.delete("/fernet/all", async (req, res) => {
    const fernet = await Fernet.deleteMany();
    res.json(fernet);
})

// Cafe
app.get("/cafe", async (req, res) => {
  const cafe = await Cafe.find();
  res.json(cafe);
});

app.post("/cafe", async (req, res) => {
    const cafe = await Cafe.create(req.body);
    res.json(cafe);
});

app.delete("/cafe", async (req, res) => {
    const cafe = await Cafe.findOneAndDelete();
    res.json(cafe);
})

app.delete("/cafe/all", async (req, res) => {
    const cafe = await Cafe.deleteMany();
    res.json(cafe);
})

// Arroz
app.get("/arroz", async (req, res) => {
  const arroz = await Arroz.find();
  res.json(arroz);
});

app.post("/arroz", async (req, res) => {
    const arroz = await Arroz.create(req.body);
    res.json(arroz);
});

app.delete("/arroz", async (req, res) => {
    const arroz = await Arroz.findOneAndDelete();
    res.json(arroz);
})

app.delete("/arroz/all", async (req, res) => {
    const arroz = await Arroz.deleteMany();
    res.json(arroz);
})

// Pan
app.get("/pan", async (req, res) => {
  const pan = await Pan.find();
  res.json(pan);
});

app.post("/pan", async (req, res) => {
    const pan = await Pan.create(req.body);
    res.json(pan);
});

app.delete("/pan", async (req, res) => {
    const pan = await Pan.findOneAndDelete();
    res.json(pan);
})

app.delete("/pan/all", async (req, res) => {
    const pan = await Pan.deleteMany();
    res.json(pan);
})

// Gaseosa
app.get("/gaseosa", async (req, res) => {
  const gaseosa = await Gaseosa.find();
  res.json(gaseosa);
});

app.post("/gaseosa", async (req, res) => {
    const gaseosa = await Gaseosa.create(req.body);
    res.json(gaseosa);
});

app.delete("/gaseosa", async (req, res) => {
    const gaseosa = await Gaseosa.findOneAndDelete();
    res.json(gaseosa);
})

app.delete("/gaseosa/all", async (req, res) => {
    const gaseosa = await Gaseosa.deleteMany();
    res.json(gaseosa);
})

// Products (all) solo nombres
app.get("/products", async (req, res) => {
    try {
      // Verificar la existencia de registros en cada modelo
      const hasFernet = (await Fernet.countDocuments()) > 0 ? ['Fernet'] : [];
      const hasCafe = (await Cafe.countDocuments()) > 0 ? ['Cafe'] : [];
      const hasArroz = (await Arroz.countDocuments()) > 0 ? ['Arroz'] : [];
      const hasPan = (await Pan.countDocuments()) > 0 ? ['Pan'] : [];
      const hasGaseosa = (await Gaseosa.countDocuments()) > 0 ? ['Gaseosa'] : [];

      // Combinar todos los nombres de tipos de productos en una sola lista
      const allProductTypes = [...hasFernet, ...hasCafe, ...hasArroz, ...hasPan, ...hasGaseosa];

      // Devolver la lista de tipos de productos
      res.json(allProductTypes);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los tipos de productos" });
    }
  });
