const {Router} =require ('express')

const router=Router()

const listingController=require('../controllers/listingController')

router.get ('/', listingController.homepage_get)

router.get ('/listings/:query', listingController.listing_getAll)
router.get ('/listings/:id', listingController.listing_getById)
router.post ('/listings', listingController.listing_post)
router.delete ('/listings/:id', listingController.listing_delete)
router.put('/listings/:id', listingController.listing_put)
   



module.exports=router 