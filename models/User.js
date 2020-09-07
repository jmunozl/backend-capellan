const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    rut: {type: String, trim: true, unique: true, lowercase: true, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, trim: true, unique: true, lowercase: true, required: true},
    password: {type: String, trim: true, required: true},
    tipo_usuario: {type: String, trim: true, required: true}
})

module.exports = model('Users', userSchema)
