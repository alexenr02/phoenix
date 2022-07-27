//importar dependencias
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Crear la estructura / SCHEMA

const ProductSchema = new Schema(
    {
        routeName: String,
        id: String,
        modelo: String,
        marca: String,
        color: String,
        numero: Number
    }
)

module.exports = mongoose.model('products',ProductSchema)