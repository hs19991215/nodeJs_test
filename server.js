const express = require('express');
const app = express();
const route = express.Router()
const dbConnect = require('./mongoDb')

// async await method
const main = async () => {
    let data = await dbConnect()
    data = await data.find().toArray()
    console.log(data)
}
main();

app.get('/data', async (req, res,) => {
    let data = await dbConnect()
    data = await data.find().toArray()
    res.send(data)
})

app.listen(5000);
