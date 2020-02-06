const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server=express();

const dataRouter = require('./router-&-model/data-router.js')


server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api', dataRouter)


server.get('/', (req,res) => {
    res.status(200).json('Server is working')
})


module.exports = server;