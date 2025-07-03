const joyasModel = require('../models/joyasModel')

function buscarTodos(req, res) {
    joyasModel.find({})
        .then(joyas =>{
            if (joyas.length) {
                return res.status(200).send({joyas})
            }
            return res.status(204).send({message: 'No hay nada que mostar'})
        })
        .catch(e =>{
            return res.status(404).send({message: 'Error al consultar la informacion'})
        })
}

module.exports = {
    buscarTodos
}