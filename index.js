const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const ClientRoute = require('./routes/api/client');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://siviwe:246810@expose-t6srn.mongodb.net/cityboarddb?retryWrites=true&w=majority',{useNewUrlParser:true}).then(()=>{
    console.log('Connected to mongodb');
});

app.get('/',(req,res)=>{
    res.send(`Server is running on port ${port}`);
});

app.use('/api/clients',ClientRoute);



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

