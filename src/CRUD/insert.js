const dbConnect = require('../mongoDb');

const insert = async () => {
    const db = await dbConnect();
    let result = await db.insertOne({
        name: "Nothing phone 1",
        price: 10005
    },)
    console.log("Insert Function", result)

}

insert();

// insert many

// const insert = async () => {
//     const db = await dbConnect();
//     let result = await db.insertMany([
//         {
//             name: "Nothing phone 1",
//             price: 10005
//         },

//     ])
//     console.log("Insert Function", result)

// }

// insert();