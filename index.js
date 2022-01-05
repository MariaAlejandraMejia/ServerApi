console.log('funciona');

const app = require('./app/app')

app.listen(app.get('port'), (error) => {
    if(error){
        console.log('error en index')
        console.log(`existe un error: ${error}`)
    }else{
        console.log(`server running on port: ${app.get('port')}`)
    }
}) 

//database
require('./config/conexion')