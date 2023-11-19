const mongoose = require('mongoose');

// Definimos el Schema
const arrozSchema = new mongoose.Schema({
    nombre: String,
    precio: {
        type: Number,
        required: true,
        default: 100,
    },
    descripcion: String,
});

// Definimos el modelo
const Arroz = mongoose.model('Arroz', arrozSchema);
module.exports = Arroz;