const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const typeUserRouter = require('./typeUser')

router.use('/user', userRouter)
router.use('/type-user', typeUserRouter)

module.exports = router
