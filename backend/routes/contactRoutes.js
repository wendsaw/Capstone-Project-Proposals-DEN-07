



const express = require('express')

// controller functions

const {contact_user}=require('../controllers/contactController')
const router = express.Router()

// contact Route

router.post('/contact', contact_user)


module.exports = router