const express = require('express');
const app = express();
const route = express.Router()
const dbConnect = require('./mongoDb')

// Then method
// dbConnect().then((res) => {
//     res?.find().toArray().then((data) => {
//         // console.warn(data)
//     })
// })

// async await method
const main = async () => {
    let data = await dbConnect()
    data = await data.find().toArray()
    console.warn(data)
}
main()

app.get('/', (req, res,) => {
    res.send("Welcome to the Home page")
    console.log(req)
})

// app.get('/users',(req, res)=>{
//     res.send("Welcome to the User page")
// })
// route.get('/about',(req, res)=>{
//     res.send("Welcome to the About page")
// })
// route.get('/contact',(req, res)=>{
//     res.send("Welcome to the Contact page")
// })

app.listen(5000)
