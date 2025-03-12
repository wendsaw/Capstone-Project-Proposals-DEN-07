

const Listing=require('../models/listing')


module.exports.homepage_get=(req,res)=>{

    res.send('homepage')
}

module.exports.listing_getAll= async(req,res)=>{

    try {
        const listings = await Listing.find({})
        res.status(200).json(listings)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

module.exports.listing_getById= async (req,res)=>{

    try {
        const listing = await Listing.findById(req.params.id)
        res.status(200).json(listing)
    } catch(err) {
        
        res.status(400).json(err)
    }
}



module.exports.listing_post= async (req,res)=>{

    try {
        const listing= await Listing.create(req.body)
        console.log(listing)
        res.status(201).json(listing)
    } catch(err) {
        
        res.status(400).json(err)
    }
}


module.exports.listing_put= async (req,res)=>{

    try {
       
        console.log(req.body)
        const response = await Listing.findByIdAndUpdate(req.params.id, req.body) // can add { new: true } as third argument
        
        res.status(200).json(response)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}


module.exports.listing_delete= async (req,res)=>{

    try {
        const response = await Listing.findByIdAndDelete(req.params.id)
        
        res.status(200).json(response)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}


