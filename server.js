const path = require('path')
const express = require('express')
const server = express()
const port = 3000

server.set('view engine', 'hbs')
server.set('views', path.join(`${__dirname}/public`))
server.use(express.static('public'))

server.get('*', (req, res) => {
    res.render('index')
})

server.listen(port)