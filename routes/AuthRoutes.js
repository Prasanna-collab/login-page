const express = require("express");
const router = express.Router();
const loginpage = require("../models/index");

router.post("/", async(req,res)=>{
  const {email,password} = req.body;
  try {
    const user = await loginpage.findOne({email: email})
    if (user){
      res.json("ok")
    }else {
      res.json("notok")
    }
  } catch (error) {
    res.json('error')
  }
})

router.post("/signup/register", async(req,res)=>{
  const {email, password}= req.body;
  try {
    const user = await loginpage.findOne({email:email})
    if(user){
      res.json("ok")
    }else {
      const document = await loginpage.insertMany(req.body)
      res.json('addedok')
    }
  } catch (error) {
    res.json('error')
  }
})

module.exports = router;
