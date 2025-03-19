

const express = require('express')

// controller functions

const {contact_user, contact_all}=require('../controllers/contactController')
const router = express.Router()

// contact Route

router.post('/contact', contact_user)
router.get('/contact', contact_all)


module.exports = router