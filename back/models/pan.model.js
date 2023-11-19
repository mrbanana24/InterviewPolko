const mongoose = require('mongoose');

// Definimos el schema
const panSchema = new mongoose.Schema({
    nombre: String,
    precio: {
        type: Number,
        required: true,
        default: 25,
    },
    descripcion: String,
});

// Definimos el modelo
const Pan = mongoose.model('Pan', panSchema);
module.exports = Pan;