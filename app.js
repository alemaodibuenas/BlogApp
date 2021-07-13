//carregando modulos
const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const admin = require("./routers/admin")
const path = require("path")
//const mongoose = require("mongoose")

//configurações
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//config expree
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//public
app.use(express.static(path.join(__dirname, "public")))

//mongoose



//rotas
app.use('/admin', admin)

//outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("servidor http://localhost:8081 rodando!")
})
