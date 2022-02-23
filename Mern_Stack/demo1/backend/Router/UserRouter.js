const express = require('express');
const userModel = require('../Model/userModel');
const router = express.Router();
router.use(express.json());
router.post('/Reguser',(req,res)=>{
const data = req.body;
userModel.create(data)
return  res.json({"Data":data});
});
router.post('/login',async(req,res)=>{
 const data = req.body;
  const list = await userModel.find(data);
  console.log(list)
 return res.json({"data":list});
})
router.get('/showdata',async(req,res)=>{
 const list = await userModel.find();
 return res.json({'Data':list});
})
router.delete('/deluser/:_id',async(req,res)=>{
    const id = req.params._id;
  const dt = await userModel.findByIdAndDelete({_id:id});
    return res.json({"data":dt});
})
router.get('/', (req, res) => res.send('user page '))
module.exports = router;