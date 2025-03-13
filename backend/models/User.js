const mongoose =require ('mongoose')
    const {isEmail}=require('validator')
    const bcrypt = require('bcrypt')


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
    
 }



})

// fire a function after a doc is saved



userSchema.pre('save',async function (next){

    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt)

    next()


})


//static method to login user

userSchema.statics.login= async function (email,password){

const user=await this.findOne({email});



if (user){

    
    const match = await bcrypt.compare(password, user.password);
console.log(match);


    if (match){
        console.log(user);
        

        return user;
    }
    throw new Error("incorrect password");
    
}

throw new Error("incorrect email");

}





const User=mongoose.model('user', userSchema)

module.exports=User;