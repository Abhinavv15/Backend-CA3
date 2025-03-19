const express = require('express');
const app = express();
const PORT = 5678;

app.use(express.json());

app.post('/signup', (req,res)=>{
    const {username,email,password,dob} = req.body;
    if(!username){
        res.json({message:"Username cannot be empty"})
    }
    if(!email){
        res.json({message:"Email cannot be empty"})
    }
    if(password.length<8 && password.length>16){
        res.json({message:"Password length should be greater than 8 and less than 16"})
    }

    res.json({message:"SignUp Completed" , data: {username,email,dob}})
})

app.get('/',(req,res)=>{
    res.json({message:"Working Properly"})
})

app.listen(PORT,()=>{
    console.log(`PORT is Running on ${PORT}`);
})