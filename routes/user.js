const express = require('express')
const router = express.Router()
const cors = require('cors')
const {add, login, list, update} = require('../controllers/UserController')
const auth = require('../middlewares/auth')

router.use(cors())

router.post('/add', auth.verifyAdmin, ((req, res, next) => {
  try {
    const response = add(req, res, next)
    response.then(() => {
      console.log('add')
    })
  } catch (e) {
    console.log(e)
  }
}))

router.post('/login', ((req, res, next) => {
  try {
    const response = login(req, res, next)
    response.then(() => {
      console.log('login')
    })
  } catch (e) {
    console.log(e)
  }
}))

router.get('/list', auth.verifyAdmin, (req, res, next) => {
  try {
    const response = list(req, res, next)
    response.then(() => {
      console.log('list')
    })
  } catch (e) {
    console.log(e)
  }
})

router.put('/update', auth.verifyAdmin, (req, res, next) => {
  try {
    const response = update(req, res, next)
    response.then(() => {
      console.log('update')
    })
  } catch (e) {
    console.log(e)
  }
})

module.exports = router



