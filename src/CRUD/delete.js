const dbConnect = require('../../mongoDb');

const deleteData = async () => {
    let data = await dbConnect();
    const result = await data.deleteOne({
        name: "Mi 2",
    })
    console.log("Data deleted", result)

}
deleteData();

// Delete many

// const deleteData = async () => {
//     let data = await dbConnect();
//     const result = await data.deleteMany([
//         {
//             name: "Mi 2",
//         }
//     ])
//     console.log("Data deleted", result)
// }
// deleteData();