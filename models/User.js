const {Schema, model} = require('mongoose')

const userSchema = new Schema({
  rut: {type: String, trim: true, unique: true, lowercase: true, required: true, maxlength: 50},
  nombre: {type: String, required: true, maxlength: 50},
  apellido: {type: String, required: true, maxlength: 50},
  email: {type: String, trim: true, unique: true, lowercase: true, required: true, maxlength: 50},
  password: {type: String, trim: true, required: true},
  type_users: {type: Schema.ObjectId, ref: 'type_users'},
  createAt: {type: Date, default: Date.now},
  estado: {type: Number, default: 1}
})

const User = model('users', userSchema)
module.exports = User


