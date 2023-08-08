const express = require('express');
const app = express();

// Middleware
// Type: Route level middleware
const  reqFilter =(req, res, next)=>{
if(!req.query.age){
    res.send("please provide age")
}else if (req.query.age <18){
    res.send("You cannot access this page")
}
else{
    next()
}
}
// Remove this 
// app.use(reqFilter) 

//Note: and apply reqFilter function in each route.
app.get('/',(req, res)=>{
    res.send("Welcome to the Home page")
})

app.get('/users',reqFilter,(req, res)=>{
    res.send("Welcome to the User page")
})
app.get('/about',(req, res)=>{
    res.send("Welcome to the User page")
})
app.listen(5000)
