const models = require('../models')

async function list(req, res, next) {
  try {
    await models.TypeUser.find({}, {__v: 0, createAt: 0})
      .then(userList => {
        if (userList.length > 0) {
          res.status(200).json({users: userList})
        } else {
          res.status(200).json({err: 'No existen tipos usuarios registrados'})
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

async function add(req, res, next) {
  try {
    const TypeUserData = {
      nombre: req.body.nombre
    }

    await models.TypeUser.findOne({nombre: TypeUserData.nombre})
      .then(TypeUser => {
        if (!TypeUser) {
          models.TypeUser.create(TypeUserData).then(user => {
            res.status(201).json({status: ' Tipo Usuario ' + user.nombre + ' creado'})
          }).catch(err => {
            res.json({'Error': err})
          })
        } else {
          res.status(200).json({err: 'Tipo Usuario ' + TypeUser.nombre + ' ya esta registrado'})
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


module.exports = {add, list}
