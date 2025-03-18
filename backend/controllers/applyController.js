



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

module.exports.apply_all= async (req,res)=>{

      
  
      try {
          const apply = await JobApplication.find({});
          res.status(200).json(apply)
      } catch(err) {
          console.log(err)
          res.status(400).json(err)
      }
}

module.exports.apply_byId= async (req,res)=>{

    try {
        const apply = await JobApplication.findById(req.params.id)
        res.status(200).json(apply)
    } catch(err) {
        
        res.status(400).json(err)
    }
}






