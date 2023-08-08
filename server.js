const express = require('express');
const app = express();
const route = express.Router()
const dbConnect = require('./mongoDb')

// async await method
const main = async () => {
    let data = await dbConnect()
    data = await data.find().toArray()
    console.warn(data)
}
main();

app.get('/', (req, res,) => {
    res.send("Welcome to the Home page")
    console.log(req)
})

app.listen(5000);
