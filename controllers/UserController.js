const models = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10

process.env.SECRET_KEY = 'secret'

async function login(req, res, next) {
  try {
    models.User.findOne({rut: req.body.rut}).then(userRut => {

      if (userRut) {
        if (userRut.estado === 0) {
          res.status(200).json({error: 'Usuario desactivado'})
        } else {
          if (bcrypt.compareSync(req.body.password, userRut.password)) {
            const payload = {
              _id: req.body._id,
              nombre: req.body.nombre,
              apellido: req.body.apellido,
              email: req.body.email,
              tipo_usuario: req.body.tipo_usuario
            }
            let token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: 1440})
            res.status(200).json({token: token})
          } else {
            res.status(200).json({error: 'Contraseña incorrecta'})
          }
        }
      } else {
        res.status(200).json({error: 'Usuario no esta registrado'})
      }
    })
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error'
    })
    next(e)
  }
}

async function add(req, res, next) {
  try {
    const userData = {
      rut: req.body.rut,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      password: req.body.password,
      type_users: req.body.type_users
    }

    await models.User.findOne({rut: userData.rut})
      .then(userRut => {
        if (!userRut) {
          models.User.findOne({email: userData.email}).then(userEmail => {
            if (!userEmail) {
              bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
                userData.password = hash
                models.User.create(userData).then(user => {
                  res.status(201).json({status: user.rut + ': Usuario creado'})
                }).catch(err => {
                  res.json({'Error': err})
                })
              })
            } else {
              res.status(200).json({err: 'Email ' + userEmail.email + ' ya esta registrado'})
            }
          })
        } else {
          res.status(200).json({err: 'Rut ' + user.rut + ' ya esta registrado'})
        }
      }).catch(err => {
        res.status(500).json({'Error': err})
      })
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error'
    })
    next(e)
  }
}

async function list(req, res, next) {
  try {
    await models.User.find({}, {__v: 0, password: 0})
      .populate('type_users', {nombre: 1})
      .then(userList => {
        if (userList.length > 0) {
          res.status(200).json({users: userList})
        } else {
          res.status(200).json({err: 'No existen usuarios registrados'})
        }
      }).catch(err => {
        console.log(err)
        res.status(500).json({'Error': err})
      })
  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error'
    })
    next(e)
  }
}

async function update(req, res, next) {
  try {
    const id = await models.User.findOne({rut: req.body.rut}).select('_id')
    const query = {_id: id}
    await models.User.update(query, {
      rut: req.body.rut,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      tipo_usuario: req.body.tipo_usuario,
      estado: req.body.estado
    }).then(userUpdate => {
      if (userUpdate.nModified > 0) {
        res.status(200).json({status: 'Usuario actualizado correctamente'})
      } else {
        res.status(200).json({err: 'Usuario sin cambios realizados'})
      }
    }).catch(err => {
      console.log(err)
      res.status(500).json({'Error': err})
    })

  } catch (e) {
    res.status(500).json({
      message: 'Ocurrio un error'
    })
    next(e)
  }
}

module.exports = {add, login, list, update}
