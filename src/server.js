const express = require('express')
const server = express()

const {
     landingPage,
     pageStudy,
     pageGiveClasses,
     saveClasses
} = require('./pages')


const nunjucks = require('nunjucks') 
nunjucks.configure('src/views', {
     express: server,
     noCache: true,
})

server
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))
.get("/",  landingPage)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)