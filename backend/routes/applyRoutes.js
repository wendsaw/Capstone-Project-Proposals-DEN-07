

const express = require('express')

// controller functions

const {apply_user}=require('../controllers/applyController')
const router = express.Router()

// application Route

router.post('/apply', apply_user)


module.exports = router