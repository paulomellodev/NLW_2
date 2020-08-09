const proffys = [
     {
          name: "Paulo",
          avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
          whatsapp: "231561841",
          bio: "Estudante",
          subject: "Inglês",
          cost: "50",
          weekday: [0],
          time_from: [254],
          time_to: [356]
     }
]

const subjects = [
     "Artes",
     "Biologia",
     "Ciências",
     "Educação física",
     "Física",
     "Geografia",
    "História",
     "Matemática",
     "Português",
     "Química"
]

const weekdays = [
     "Domingo",
     "Segunda-feira",
     "Terça-feira",
     "Quarta-feira",
     "Quinta-feira",
     "Sexta-feira",
     "Sábado"
]

const express = require('express')
const server = express()
const nunjucks = require('nunjucks') 

nunjucks.configure('src/views', {
     express: server,
     noCache: true,
})

function getSubject(subjectNumber){
     const position = +subjectNumber -1
     return subjects[position]
}

function landingPage(req, res){
     return res.render("index.html")
}

function pageStudy(req, res) {
     const filters = req.query
     return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res){
     const dataset = req.query
     
     const isNotEmpty = Object.keys(dataset).length > 0
     
     if (isNotEmpty) {

          dataset.subject = getSubject(dataset.subject)

          proffys.push(dataset)
          
          return res.redirect("/study")
     
     }
     return res.render("give-classes.html", {subjects, weekdays})
     
}

server
.use(express.static("public"))
.get("/",  landingPage)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)