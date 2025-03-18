

const express = require('express')

// controller functions

const {apply_user, apply_byId,apply_all}=require('../controllers/applyController')

const router = express.Router()

// application Route

router.post('/apply', apply_user)
router.get('/apply/:id', apply_byId)
router.get('/apply', apply_all)


module.exports = router