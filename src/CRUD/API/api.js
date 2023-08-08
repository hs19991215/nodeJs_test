const express = require("express");
const dbConnect = require('../../../mongoDb');
const app = express();
const mongoDb = require('mongodb')


// GET METHOD ________________________________________________________________________________________________________________________
app.get("/", async (req, res) => {
    let data = await dbConnect()
    data = await data.find().toArray()
    // console.log(data)
    res.send(data)
})
// ___________________________________________________________________________________________________________________________________


// POST METHOD ________________________________________________________________________________________________________________________
// with this we can get data from postman to node js app.use(express.json()) in req.body params, then we can use any method with this params to perform operations and post into direclty in to our database.
app.use(express.json())

app.post('/', async (req, res) => {
    console.log(req.body)
    // insert method to post data in to mongodb__
    let data = await dbConnect();
    data = await data.insertMany([req.body])
    // __________________________________________
    res.send(data)
})


// PUT METHOD ________________________________________________________________________________________________________________________
app.put('/:name', async (req, res) => {
    console.log(req.body)
    // update method to update data in to mongodb__
    let data = await dbConnect();
    data = await data.updateOne({
        name: req.params.name,
        price: 150000

    }, {
        $set: {
            name: req.body.name,
            price: req.body.price
        }
    })
    // ____________________________________________
    res.send({
        result: "Updated",
        data
    })
})

// PUT METHOD ________________________________________________________________________________________________________________________
app.delete('/:id', async (req, res) => {
    console.log(req.params)
    let data = await dbConnect();
    data = await data.deleteOne({ _id: new mongoDb.ObjectId(req.params.id) })
    res.send({ "called": true })
})
app.listen(5000)

