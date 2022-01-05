
const dataModels = require('../models/usuario_models')

function getUsuario(req, res){
    dataModels.getUsuario(( data, error) =>{
        res.json(data)
    })
}
function getTipo(req, res){
    dataModels.getTipo(( data, error) =>{
        console.log('respuesta exitosa tipo')
        res.json(data)
    })
}
function getEstado(req, res){
    dataModels.getEstado(( data, error) =>{
        console.log('respuesta exitosa estado')
        res.json(data)
    })
}

function getSUsuario(req, res){
    console.log("usuario: ", req.params)
    const {usuario} = req.params
    dataModels.getSUsuario( usuario , (data, error) =>{
        res.json(data)
    })
}

function getinfipodg(req, res){
    console.log("usuario: ", req.params)
    const {usuario} = req.params
    dataModels.getinfipodg( usuario , (data, error) =>{
        res.json(data)
    })
}

function getSpass(req, res){
    const {usuario, pass} = req.params
    console.log(`tenemos: ${usuario}, ${pass}`)
    dataModels.getSpass( {usuario, pass}, (data, error) =>{
        res.json(data)
    })
}
function getObtenerIDUSUARIO(req, res){
    console.log("usuario: ", req.params)
    const {usuario} = req.params
    dataModels.getObtenerIDUSUARIO( usuario , (data, error) =>{
        res.json(data)
    })
}

function getSabertipousuario(req, res){
    console.log("usuario: ", req.params)
    const {PASS} = req.params
    dataModels.getSabertipousuario( PASS , (data, error) =>{
        res.json(data)
    })
}

//post

function PostUsuarioBloqueo(req, res){
    console.log("usuario: ", req.params)
    const {usuario} = req.params
    dataModels.PostUsuarioBloqueo( usuario , (data, error) =>{
        res.json(data)
    })
}

function postEdit(req, res){
    const {NOMBRE, Puesto, usuario, clave, id_estado, ID_TIPO_US, ID_USUARIO} = req.params
    console.log(`tenemos: ${NOMBRE}, ${Puesto}, ${usuario}, ${clave}, ${id_estado}, ${ID_TIPO_US}, ${ID_USUARIO}`)
    dataModels.postEdit( {NOMBRE, Puesto, usuario, clave, id_estado, ID_TIPO_US, ID_USUARIO}, (data, error) =>{
        res.json(data)
    })
}

module.exports = {
    getUsuario,
    getSUsuario,
    getSpass,
    getObtenerIDUSUARIO,
    getSabertipousuario,
    getTipo,
    getEstado,
    getinfipodg,
    PostUsuarioBloqueo,
    postEdit
}