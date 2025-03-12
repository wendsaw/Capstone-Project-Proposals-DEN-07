const mongoose =require ('mongoose')

const {isEmail}=require('validator')
const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema({

    firstName:{
        type:String,
    },

    lastName:{
        type:String,
    },
    userName:{
        type:String,
    },


 email:{

    type:String,
    required:[true, 'please enter an email'],
    unique:true,
    lowercase:true,
     validate:[isEmail,'please enter a valid email']


 },
 password:{
    type:String,
    required:[true, 'please enter a password'],
    minlength:[6, 'password length must be 6 character'],
    lowercase:true
 }



})

// fire a function after a doc is saved



userSchema.pre('save',async function (next){

    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt)

    console.log('user is about to be created');

    next()


})

const User=mongoose.model('user', userSchema)

module.exports=User;