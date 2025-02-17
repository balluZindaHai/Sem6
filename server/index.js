const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const regModel = require('./models/Reg')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://semproject69:STwOnpP1nSTu0ZNv@cluster0.6q1ql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/EzyBuy");
app.post('/Login', (req,res) =>{
    const { email , password } = req.body
    regModel.findOne({email:email})
    .then(user => {
              if(user)
             {
                    if(user.password === password)
                    {
                        res.json("Welcom");
                    }
                    else
                    {
                        res.json("password inccorect");
                    }
                }
    else{
        res.json(" No data found here " );
    }
})
})

app.post('/reg' ,(req,res) =>{
    regModel.create(req.body)
    .then(register => res.json(register))
    .catch(err => res.json(err))
})
app.listen(3001, ()=> {
    console.log("Server is running on port 3001");
})