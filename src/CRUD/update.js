const dbConnect = require('../mongoDb');

const update = async () => {
    let data = await dbConnect();
    const result = await data.updateOne({
        name: "Mi 1",
    }, {
        $set: { name: "Mi 2" }
    })
    console.warn("Data Updated", result);
}
update();

// update many

// const update = async () => {
//     let data = await dbConnect();
//     const result = await data.updateMany([
//         {
//             name: "Mi 1",
//         }, {
//             $set: { name: "Mi 2" }
//         }
//     ])
//     console.warn("Data Updated", result);
// }
// update();