const express = require('express')
const router = express.Router()
const cors = require('cors')
const {add, list} = require('../controllers/TypeUserController')
const auth = require('../middlewares/auth')

router.use(cors())

router.post('/add',auth.verifyAdmin, ((req, res, next) => {
  try {
    const response = add(req, res, next)
    response.then(() => {
      console.log('add')
    })
  } catch (e) {
    console.log(e)
  }
}))

router.get('/list', (req, res, next) => {
  try {
    const response = list(req, res, next)
    response.then(() => {
      console.log('list')
    })
  } catch (e) {
    console.log(e)
  }
})

module.exports = router



