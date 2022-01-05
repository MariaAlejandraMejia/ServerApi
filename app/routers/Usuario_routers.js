const route = require('express').Router()
const { getUsuario, getSUsuario, getSpass, getObtenerIDUSUARIO, PostUsuarioBloqueo, getSabertipousuario, getTipo, getEstado, getinfipodg, postEdit } = require('../controllers/usuario_controllers')


//mtodo get
route.route('/usuario/obtener').get(getUsuario)
route.route('/usuario/obtener/Tipo').get(getTipo)
route.route('/usuario/obtener/Estado').get(getEstado)
route.route('/usuario/obtener/numerodeusuarioncoincide/:usuario').get(getSUsuario)
route.route('/usuario/obtener/numerodepasswordcoincide/:usuario/:pass').get(getSpass)
route.route('/usuario/obtener/idUsuario/:usuario').get(getObtenerIDUSUARIO)
route.route('/usuario/obtener/TIPOUUSUARIO/:PASS').get(getSabertipousuario)
route.route('/usuario/obtener/infopodg/:id_us').get(getinfipodg)

//metodo post
route.route('/usuario/editar/bloquear/:usuario').get(PostUsuarioBloqueo)
route.route('/usuario/editar/usuario/:NOMBRE/:Puesto/:usuario/:clave/:id_estado/:ID_TIPO_US/:ID_USUARIO').put(postEdit)

module.exports = route
