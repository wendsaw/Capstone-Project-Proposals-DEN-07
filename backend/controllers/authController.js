const User=require('../models/User')

const jwt=require('jsonwebtoken');
//handle error

const handleErrors=(err)=>{

    console.log(err.message);

    let errors={email:"" ,password:""};

    //incorrect email 

    if(err.message ==='incorrect email'){
        errors.email="this email is wrong"
        console.log(errors.email);
        
        
        
    }
    //incorrect password

    if(err.message ==='incorrect password'){
        errors.password="this password is wrong"
        console.log(errors.password);
        
        
    }

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

    return errors
    
}

const createToken = (id) => {
    return jwt.sign({ id }, 'ant technology secret', { expiresIn: '3d' });
  };
  

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
      const maxAge = 3 * 24 * 60 * 60 * 1000; 
      const token = createToken(user._id);
      
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
         res.status(201).json({user:user._id});
         
        
    } catch (err) {
        const errors=handleErrors(err)
        res.status(400).json({errors});
        
        
    }
}


module.exports.login_post= async (req,res)=>{
    
    const {email,password}= req.body

    
    try {

        const user= await User.login(email, password)
        const token = createToken(user._id);
        const maxAge = 3 * 24 * 60 * 60 * 1000; 
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
        res.status(200).json({user})
        
    } catch (err) {

       
        
        const errors=handleErrors(err)
        console.log('Sending error response:', errors);
    
        res.status(400).json({errors})
    }
  
    
}