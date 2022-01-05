const connection = require('../../config/conexion')

var dataModels = {
    getUsuario : (callback) =>{
        if (connection) {
            let sql = `SELECT u.ID_USUARIO, U.NOMBRE, U.Puesto, u.usuario, u.clave, e.EST_NOM AS id_estado, tp.Nombre as ID_TIPO_US
            FROM ideastalemto.usuario u, ideastalemto.tipo_usuario tp, ideastalemto.estado e
           where u.id_estado = e.ID_ESTADO AND U.ID_TIPO_US= tp.ID_TIPO_US;`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getTipo : (callback) =>{
        if (connection) {
            let sql = `SELECT TIPO, NOMBRE FROM ideastalemto.tipo_usuario;`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getEstado : (callback) =>{
        if (connection) {
            let sql = `SELECT TIPO, EST_NOM FROM ideastalemto.estado;`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    getSUsuario : (data, callback) =>{
        if(connection){
            console.log('en sql es: ',data)
            let sql = `SELECT COUNT(*) as usuariocoincide FROM ideastalemto.usuario where usuario = '${data}' and id_estado = 1;`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows[0])
            })
        }
    },
    getSpass : (data, callback) =>{
        if(connection){
            console.log('en sql es: ',data)
            let sql = `SELECT COUNT(*) as usuariocoincide FROM ideastalemto.usuario where clave = ${connection.escape(data.pass)} and usuario = ${connection.escape(data.usuario)};`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows[0])
            })
        }
    },

    getSabertipousuario : (data, callback) =>{
        if(connection){
            console.log('en sql es: ',data)
            let sql = `select ID_TIPO_US FROM  ideastalemto.usuario WHERE ID_USUARIO='${data}';`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows[0])
            })
        }
    },
    getinfipodg : (data, callback) =>{
        if(connection){
            console.log('en sql es: ',data)
            let sql = `SELECT u.ID_USUARIO, U.NOMBRE, U.Puesto, u.usuario, u.clave, e.EST_NOM AS id_estado, tp.Nombre as ID_TIPO_US
            FROM ideastalemto.usuario u, ideastalemto.tipo_usuario tp, ideastalemto.estado e
           where u.id_estado = e.ID_ESTADO AND U.ID_TIPO_US= tp.ID_TIPO_US
           and u.ID_USUARIO='${data}';`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows[0])
            })
        }
    },
    getObtenerIDUSUARIO : (data, callback) =>{
        if(connection){
            console.log('en sql es: ',data)
            let sql = `select ID_USUARIO FROM  ideastalemto.usuario WHERE usuario = '${data}';`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows[0])
            })
        }
    },

    //post
    PostUsuarioBloqueo : (data, callback) =>{
        if(connection){
            console.log('en sql es: ',data)
            let sql = `UPDATE ideastalemto.usuario SET id_estado='2' WHERE ID_USUARIO= '${data}';`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'usuario bloqueado correctamente'})
            })
        }
    },

    postEdit : (data, callback) =>{
        if(connection){
            console.log('en sql es: ',data)
            let sql = `UPDATE ideastalemto.usuario 
            SET NOMBRE=${connection.escape(data.NOMBRE)}, Puesto=${connection.escape(data.Puesto)}, usuario=${connection.escape(data.usuario)}, clave=${connection.escape(data.clave)}, 
            id_estado=${connection.escape(data.id_estado)}, ID_TIPO_US=${connection.escape(data.ID_TIPO_US)} WHERE ID_USUARIO=${connection.escape(data.ID_USUARIO)};`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'usuario editado'})
            })
        }
    },
}

module.exports = dataModels