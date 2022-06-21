const express = require('express')

const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log('🔥 Servidor Rondando http://localhost:3000'))
