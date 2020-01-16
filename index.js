require('dotenv').config()

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const port= process.env.PORT || 4000;
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api/country', (req, res)=>{
    res.json(`I live in ${req.query.name}`)
})
app.use((req, res)=>{
    res.json(`Api is working`);
})
app.listen(port, ()=>{
    console.log(`Listening on ${port}`)
})