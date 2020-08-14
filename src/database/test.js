const database = require('./db.js')
const createProffy = require('./createProffy.js')

database.then(async (db) => {
     //Inserir dados

     proffyValue ={
          name: "Paulo",
          avatar: "https://scontent.fcgh27-1.fna.fbcdn.net/v/t31.0-1/p160x160/13996312_1194172483937208_727024794610253991_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=-0KZFXg4YJMAX8Sio5E&_nc_ht=scontent.fcgh27-1.fna&_nc_tp=6&oh=725633bd98bd1be353a6164180b67108&oe=5F578962",
          whatsapp: "11987654321",
          bio: "Estudante"
     }

     classValue = {
          subject: 5,
          cost: "50"
     }

     classScheduleValues = [{
          weekday: 1,
          time_from: 580,
          time_to: 760
     },
     {
          weekday: 4,
          time_from: 760,
          time_to: 960
     }]

     // await createProffy(db, {proffyValue, classValue, classScheduleValues})

     //consultar dados no db
     //proffys

     const registeredProffys = await db.all("SELECT * FROM proffys")
     // console.log(registeredProffys)    

     //consultar class e proffys

     const registeredClassAndProffys = await db.all(`
          SELECT classes.*, proffys.*
          FROM proffys
          JOIN classes ON (classes.proffy_id = proffys.id)
          WHERE classes.proffy_id = 1;
     `)
     // console.log(registeredClassAndProffys)    

     // consultar horário
     const  registreredClassesSchedules = await db.all(`
          SELECT class_schedule.*
          FROM class_schedule
          WHERE class_schedule.class_id = "1"
          AND class_schedule.weekday = "4"
          AND class_schedule.time_from <= "800"
          AND class_schedule.time_to  > "900"
     `)
     console.log(registreredClassesSchedules)

})