let router = require('express').Router()
const controller = require('/controller/UserController')

router.route('/users')
    .get(controller.getAll)
    .post(controller.new)

router.route('/users/:rut')
    .get(controller.view)
    .patch(controller.update)
    .put(controller.update)
    .delete(controller.delete)

module.exports = router

