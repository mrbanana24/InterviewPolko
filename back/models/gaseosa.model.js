const mongoose = require('mongoose');


// Definimos el schema
const gaseosaSchema = new mongoose.Schema({
    nombre: String,
    precio: {
        type: Number,
        required: true,
        default: 80,
    },
    descripcion: String,
});

// Definimos el modelo
const Gaseosa = mongoose.model('Gaseosa', gaseosaSchema);
module.exports = Gaseosa;