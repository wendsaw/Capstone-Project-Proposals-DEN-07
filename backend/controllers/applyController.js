



const JobApplication=require('../models/application')



module.exports.apply_user= async (req,res)=>{

    try {
        const Application= await JobApplication.create(req.body)
        console.log(Application)
        res.status(201).json(Application)
        console.log('application created');
    } catch(err) {

        console.log('error');
        
        
        res.status(400).json(err)
    }
}






