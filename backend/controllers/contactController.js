


const Contact=require('../models/contact')

module.exports.contact_user= async (req,res)=>{

    try {
        const cont= await Contact.create(req.body)
        console.log(cont)
        res.status(201).json(cont)
        console.log(' contact created');
    } catch(err) {

        console.log('error');
        
        
        res.status(400).json(err)
    }
}
module.exports.contact_all= async (req,res)=>{

    try {
        const cont= await Contact.find({})
        console.log(cont)
        res.status(201).json(cont)
        console.log(' contact created');
    } catch(err) {

        console.log('error');
        
        
        res.status(400).json(err)
    }
}






