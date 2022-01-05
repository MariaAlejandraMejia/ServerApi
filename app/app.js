
const express =require('express')
const port =(process.env.PORT || 3000)

//INICIALIZAR

const app = express()

//settings

app.set('port', port)

//middlewares

app.use(express.urlencoded({extends: false}))
app.use(express.json())

// routers

//app.use(require('./routers/Usuario_routers'))
app.use(require('./routers/Usuario_routers'))

module.exports = app
