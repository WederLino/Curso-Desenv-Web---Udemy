const schedule = require("node-schedule");

const tarefa1 = schedule.scheduleJob("*/5 * 14 * * 5", () =>{
    console.log("Executando tarefa1: ", new Date().getSeconds())
});

setTimeout(() =>{
    tarefa1.cancel()
    console.log("Tarefa1 Cancelada")
}, 20000)

const regra = new schedule.RecurrenceRule();

regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 14;
regra.second = 20

const tarefa2 = schedule.scheduleJob(regra, () =>{
    console.log("Executando tarefa2: ", new Date().getSeconds()) 
})