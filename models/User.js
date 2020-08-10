const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    rut: {type: String, trim: true, unique: true, lowercase: true, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, trim: true, unique: true, lowercase: true, required: true},
    password: {type: String, trim: true, required: true},
    tipo_usuario: {type: String, trim: true, required: true}
})

module.exports = User = mongoose.model('users', UserSchema)