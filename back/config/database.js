const mongoose = require("mongoose");

const connectDB = async () => {
  const dbUrl =
    'mongodb+srv://franpercivaldi:mansanita15@productos.ddxq7jx.mongodb.net/';
  mongoose
    .connect(dbUrl)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;