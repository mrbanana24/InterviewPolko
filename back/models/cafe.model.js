const mongoose = require('mongoose');

// Definimos el schema
const cafeSchema = new mongoose.Schema({
    nombre: String,
    precio: {
        type: Number,
        required: true,
        default: 50,
    },
    descripcion: String,
});

// Definimos el modelo
const Cafe = mongoose.model('Cafe', cafeSchema);
module.exports = Cafe;