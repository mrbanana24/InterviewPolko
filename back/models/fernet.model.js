const mongoose = require('mongoose');

// Definimos el schema
const fernetSchema = new mongoose.Schema({
    nombre: String,
    precio: {
        type: Number,
        required: true,
        default: 150,
    },
    descripcion: String,
});

// Definimos el modelo
const Fernet = mongoose.model('Fernet', fernetSchema);
module.exports = Fernet;
