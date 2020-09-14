const tokenService = require('../services/token')
let admin = 'administrador'
let vendedor = 'vendedor'
let mecanico = 'mecanico'


async function verifyUsuario(req, res, next) {
  if (!req.headers.token) {
    return res.status(404).send({
      message: 'No token'
    })
  }
  const response = await tokenService.decode(req.headers.token)
  if (response.type_users === admin || response.type_users === vendedor ||
    response.type_users === mecanico) {
    next()
  } else {
    return res.status(403).send({message: 'Usuario no autorizado'})
  }

}

async function verifyAdmin(req, res, next) {

  if (!req.headers.token) {
    return res.status(404).send({
      message: 'No token'
    })
  }
  const response = await tokenService.decode(req.headers.token)
  if (response.type_users.nombre === admin) {
    next()
  } else {
    return res.status(403).send({message: 'Usuario no autorizado'})
  }
}

async function verifyVendedor(req, res, next) {

  if (!req.headers.token) {
    return res.status(404).send({
      message: 'No token'
    })
  }
  const response = await tokenService.decode(req.headers.token)

  if (response.type_users.nombre === admin || response.type_users.nombre === vendedor) {
    next()
  } else {
    return res.status(403).send({message: 'Usuario no autorizado'})
  }
}

async function verifyMecanico(req, res, next) {
  if (!req.headers.token) {
    return res.status(404).send({
      message: 'No token'
    })
  }
  const response = await tokenService.decode(req.headers.token)
  if (response.type_users.nombre === admin || response.type_users.nombre === mecanico) {
    next()
  } else {
    return res.status(403).send({message: 'Usuario no autorizado'})
  }
}


module.exports = {verifyUsuario, verifyAdmin, verifyMecanico, verifyVendedor}
