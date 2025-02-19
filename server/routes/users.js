import express from 'express';
import bcrypt from 'bcrypt';
const router =express.Router();
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';



router.post('/signup', async(req,res)=>{
    const{name,email,password} =req.body;
    const user=await User.findOne({email})
    if(user)
    {
        return res.json({message:"user already existed"})
    }

     try{
        const hashpassword = await bcrypt.hash(password,10)
        const newUser =new User({
          name,
          email,
          password: hashpassword,
      })
      await newUser.save()
    }
    catch(err)
      {
        console.error("Error hashing password:", err);
        return res.status(500).json({ message: "Server error while hashing password" });
      }

    return res.json({status:true ,message :"record registed"})
    
})

router.post('/login', async(req,res)=>{
    const {email,password} =req.body;
    const user =await User.findOne({email});
    if(!user)
    {
        return res.json({message:"user is not registered"})
    }

    const vaildPassword = await bcrypt.compare(password, user.password)
    if(!vaildPassword)
    {
        return res.json({message:"password is incorrect"})
    }

    const token = jwt.sign({name: user.name,email:user.email},process.env.KEY,{expiresIn: '1h'})
    res.cookie('token',token,{httpOnly:true,maxAge:10800000})
    return res.json({status:true,message:"login successfully"})
})

router.post('/forget',async (req,res)=>{
    const {email} =req.body;
    try
    {
        const user = await User.findOne({email})
        if(!user)
        {
            return res.json({message:"user not registered"})
        }

        const token=jwt.sign({ id: user._id}, process.env.KEY, { expiresIn: '5m' })
        
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'hamzamirzaop786@gmail.com',
              pass: 'nhaj ddyh frgh iitj'
            }
          });
          
          var mailOptions = {
            from: 'hamzamirzaop786@gmail.com',
            to: email,
            subject: 'Reset Password',
            text: `http://localhost:5173/reset/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              return res.json({message:"error sending email"})
            } else {
              return res.json({status:true ,message:"email sent"+ info.response})
            }
          });
    }
    catch(err)
    {
        console.log(err)
    }
})


router.post('/reset/:token',async (req,res)=>{
  const {token} = req.params;
  const {password} =req.body
  try{
    const decoded =await jwt.verify(token,process.env.KEY);
    const id=decoded.id;
    const hashpassword=await bcrypt.hash(password,10)
    await User.findByIdAndUpdate({_id:id},{password:hashpassword})
    return res.json({status:true ,message:"Update Password"})
  }
  catch (err) {
    return res.json("invaild token ")
  }
})

const verifyUser = async (req,res,next) =>{
  try {
    const token = req.cookies.token;
    if(!token)
    {
      return res.json({status:false,message : "no token "})
    }
    const decoded = jwt.verify(token,process.env.KEY);
    req.user=decoded
    next()
  
  }catch(err)
    {
      return res.json(err);
  }
  }

router.get('/verify',verifyUser,(req,res)=>{
  const userEmail = req.user.email;
    return res.json({status:true ,message:"authorized",email:userEmail})
})

router.get('/home',verifyUser,(req,res)=>{
  const userEmail = req.user.email;
    return res.json({status:true ,message:"authorized",email:userEmail})
})

router.get('/logout',(req,res)=>{
  res.clearCookie('token')
  return res.json({status:true}) 
})

export {router as UserRouter}