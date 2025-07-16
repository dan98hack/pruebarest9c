const express = require('express')
const router = express.Router()
const joyasController = require('../controllers/joyasController')

router.get('/', joyasController.buscarTodos)
    .post('/', joyasController.agregarJoya)
    .get('/:key/:value', joyasController.buscarJoya),joyasController.mostrarJoya


module.exports = router