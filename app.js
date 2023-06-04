const express = require("express")
const bodyParser = require('body-parser')
const https = require("https")
const app = express()

app.use(bodyParser.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("hello ")
    
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=hamirpur&appid=6fd7d53422e48e1b73a3dae13bf171ff&units=metric"
// https.get(url,(response)=>{
//     console.log(response.statusCode);

//     response.on("data",(data)=>{
//         const weatherData = JSON.parse(data)
//         const temp = weatherData.main.temp;
//         console.log(temp);
//         const weatherDesc =  weatherData.weather[0].description;
//         console.log(weatherDesc);
//         const code = weatherData.weather[0].icon;
        
//         res.write(`<h1>The temperature in Hamirpur is ${temp} and description is ${weatherDesc}</h1>`)
//         res.write(`<img src='https://openweathermap.org/img/wn/${code}@2x.png'>`);
//         res.send()
//     })
// })
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get('/city',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


app.post('/city',(req,res)=>{
    console.log(req.body);
    const city = req.body.city;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6fd7d53422e48e1b73a3dae13bf171ff&units=metric`
https.get(url,(response)=>{
    console.log(response.statusCode);

    response.on("data",(data)=>{
        const weatherData = JSON.parse(data)
        const temp = weatherData.main.temp;
        console.log(temp);
        const weatherDesc =  weatherData.weather[0].description;
        console.log(weatherDesc);
        const code = weatherData.weather[0].icon;
        
        res.write(`<h1>The temperature in ${city} is ${temp} and description is ${weatherDesc}</h1>`)
        res.write(`<img src='https://openweathermap.org/img/wn/${code}@2x.png'>`);
        res.send()
    })
})


})


app.listen(3000,()=>{
    console.log("Server running...");
})