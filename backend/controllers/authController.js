const User=require('../models/User')

//handle error

const handleErrors=(err)=>{

    console.log(err.message, err.code);

    let errors={email:"" ,password:""};

    //duplicate email

    if (err.code===11000){
        errors.email='this email exist already'
        return errors
    }

    //validation error

    if(err.message.includes('user validation failed')){
       Object.values(err.errors).forEach(({properties}) =>{

        errors[properties.path]=properties.message
        
       })

       return errors
        
    }
    
}

module.exports.signup_get=(req,res)=>{

    res.send('signup')
}

module.exports.login_get=(req,res)=>{

    res.send('login')
}


module.exports.signup_post= async (req,res)=>{

    const {firstName,lastName,userName,email,password}=req.body
    

    try {

      const user= await User.create({firstName,lastName,userName,email,password});
      res.status(201).json(user)
        
    } catch (err) {
        const errors=handleErrors(err)
        res.status(400).json({errors});
        
        
    }
}


module.exports.login_post=(req,res)=>{
    
    const {firstName,lastName,userName,email,password}=req.body
    
    
}