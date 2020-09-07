const UserModel = require('../models/User')











/*
// Handle para obtener el listado de tod@s los usuarios
exports.getAll = function (req, res) {
  UserModel.get(function (err, users) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al listar usuarios:' + ' ' + err
      })
    } else {
      res.json({
        status: 'success',
        message: 'Listado de usuarios cargado correctamente',
        data: users
      })
    }
  })
}

// Handle para crear un nuevo usuario
exports.new = function (req, res) {
  const user = new UserModel()
  user.rut = req.body.rut
  user.nombre = req.body.nombre
  user.apellido = req.body.apellido
  user.email = req.body.email
  user.password = req.body.password
  user.tipo_usuario = req.body.tipo_usuario

  user.save(function (err) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al registrar usuario:' + ' ' + err
      })
    } else {
      res.json({
        status: 'success',
        message: 'Usuario registrado correctamente',
        data: user
      })
    }
  })

}

// Handle para obtener la información de la usuario dado su rut
exports.view = function (req, res) {
  UserModel.findOne(req.params.rut, function (err, user) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al buscar usuario:' + ' ' + err
      })
    } else {
      res.json({
        status: 'success',
        message: 'Usuario encontrado correctamente',
        data: user
      })
    }
  })
}

// Handle para actualizar la información de  usuario
exports.update = function (req, res) {
  UserModel.findOne(req.params.rut, function (err, user) {
    if (err) {
      res.json({
        status: 'error',
        message: 'Error al actualizar parametros usuario:' + ' ' + err
      })
    } else {
      user.nombre = req.body.nombre ? req.body.nombre : user.nombre
      user.apellido = req.body.apellido ? req.body.apellido : user.apellido
      user.email = req.body.email ? req.body.email : user.email
      user.password = req.body.password ? req.body.password : user.password
      user.tipo_usuario = req.body.tipo_usuario ? req.body.tipo_usuario : user.tipo_usuario

      user.save(function (err) {
        if (err) {
          res.json({
            status: 'error',
            message: 'Error al actualizar usuario:' + ' ' + err
          })
        } else {
          res.json({
            status: 'success',
            message: 'Usuario actualizado correctamente',
            data: user
          })
        }
      })
    }
  })
}

// Handle para eliminar un usuario
exports.delete = function (req, res) {
  UserModel.deleteOne({
      _rut: req.params.rut
    }, function (err) {
      if (err) {
        res.json({
          status: 'error',
          message: 'Error al eliminar usuario:' + ' ' + err
        })
      } else {
        res.json({
          status: 'success',
          message: 'Usuario eliminado correctamente'
        })
      }
    }
  )
}
*/
