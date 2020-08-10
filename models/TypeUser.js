const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TypeUserSchema = new Schema({
    nombre: {type: String, required: true}
})

module.exports = TyprUser = mongoose.model('type_users', TypeUserSchema)