const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EnterpriseSchema = new Schema({
    rut: {type: String, required: true},
    nombre: {type: String, required: true},
    direccion: {type: String, required: true}
})


const Enterprise = mongoose.model('enterprise', EnterpriseSchema)
module.exports = Enterprise
