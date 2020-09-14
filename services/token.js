const jwt = require('jsonwebtoken')
const models = require('../models')
let claveSecreta = 'clavesecreta'

async function encode(user) {
  return await jwt.sign({user: user}, claveSecreta, {expiresIn: '1d'})
}

async function decode(token) {
  try {
    const response = await jwt.verify(token, claveSecreta)
    const _id = response.user._id
    const user = await models.User.findOne({_id, estado: 1}).populate('type_users', {nombre: 1})
    if (user) {
      return user
    } else {
      return false
    }
  } catch (e) {
    console.log(e)
    return await checkToken(token)
  }
}

async function checkToken(token) {
  let __id = null
  try {
    const {_id} = await jwt.decode(decode)
    __id = _id

  } catch (e) {
    console.log(e)
    return false
  }

  const user = await models.User.findOne({_id: __id, estado: 1})
  if (user) {
    const token = jwt.sign({_id: __id, claveSecreta}, {expiresIn: '1d'})
    return {token, type_users: user.type_users}
  } else {
    return false
  }
}

module.exports = {encode, decode}
