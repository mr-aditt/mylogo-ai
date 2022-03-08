var express = require('express');
const passport = require('passport');
var router = express.Router();
var userSchema = require('../schema/schema')
var mongoose = require('mongoose')
var { hashPwd, comparePwd } = require('../schema/bcrypt')

/* GET users listing. */
router.get('/', function(req, res, next) {
  try{
    res.status(200).send('Success') //await userSchema.find())
  }catch (error){
    console.log(error);
  }
});

router.post('/signup', async function(req, res){
  console.log(req.body.useremail, req.body.password);
  try{
    const user = await userSchema.findOne({useremail:req.body.useremail})
    console.log("REGISTERATION USER", user);
    if(user){
      res.status(200).send({
        "status":false,
        "message":'User already exists'
      });
    }else{
      console.log("CREATING USER", req.body);
      const encodedPwd = await hashPwd(req.body.password)
      req.body.password = encodedPwd
      const record = await userSchema.create(req.body);
      res.status(200).send({
        "status":true,
        "message":'User created successfully'
      });
    }
  }catch (error){
    console.log(error);
  }
});

router.post('/signin', async function(req, res){
  try{
    const user = await userSchema.findOne({useremail:req.body.useremail})
    if(user){
      let flag = await comparePwd(req.body.password, user.password);
      if(flag){
        res.status(200).send({
          "status": true,
          "message":''
        });
        res.send('Passwords match');
      }else{
        res.status(401).send({
          "status": false,
          "message":'Incorrect Password'
        });}
    }else{
      res.status(401).send({
        "status": false,
        "message":'User does not exists'
      });
      // res.redirect('/signup')
    }
  }catch (error){
    console.log(error);
  }
});

// router.get('/mylogo', function(req, res){
//   if (!req.isAuthenticated()){
//     res.redirect('/mylogo');
//   }else {
//     res.redirect('/signin');
//   }
// })

// router.post('/signup', function(req, res) {
//   console.log('INSIDE REGISTER');
//   User.register(
//     {username: req.body.useremail},
//     req.body.password,
//     function(err, user){
//       if (err){
//         console.log(err);
//         res.redirect('/signup');
//       }else{
//         passport.authenticate('local')(req, res, function(){
//           res.redirect('/mylogo')
//         })
//       }
//     })
// });


module.exports = router;
