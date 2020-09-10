const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TypeUserSchema = new Schema({
  nombre: {type: String, required: true, unique: true},
  createAt: {type: Date, default: Date.now},
  estado: {type: Number, default: 1}
})

const TyprUser = mongoose.model('type_users', TypeUserSchema)
module.exports = TyprUser
