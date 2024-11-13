
//import dotenv 
require('dotenv').config()

//import express  - to create server
const express = require('express')

//import cors
const cors = require('cors')

//import router
const router = require('./router')

//import connection

require('./connection')

//create server 
const pfserver = express()

//server using cors - to connect to front end
pfserver.use(cors())

//parse the json data to objects  - return the middleware to parse the data
pfserver.use(express.json())

//use router
pfserver.use(router)

//exporting upload folder
pfserver.use('/uploads',express.static('./uploads'))

//Port
const PORT = 4000 || process.env.PORT

//listen
pfserver.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})


// //get 
// pfserver.get('/',(req,res)=>{
//     res.send('get request recieved')
// })


// //post
// pfserver.post('/',(req,res)=>{
//     res.send('post request recieved')
// })

// //put 
// pfserver.put('/',(req,res)=>{
//     res.send('put request recieved')
// })

// //delete request
// pfserver.delete('/',(req,res)=>{
//     res.send('delete request recieved')
// })
