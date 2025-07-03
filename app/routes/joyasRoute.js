const express = require('express')
const router = express.Router()
const joyasController = require('../controllers/joyasController')

router.get('/', joyasController.buscarTodos)


module.exports = router