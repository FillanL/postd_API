const express = require('express');
const router = express.Router();
const applyToPromotion = require('../Controller/ApplyToPromotion')

router.post('/newPromoAppilcation',applyToPromotion.applyToPromotionRequest)
router.get('/getApplicationsByRequestId',applyToPromotion.allApplicationsByRequestId)
router.get('/getApplicationByUserId',applyToPromotion.getApplicationByUserId)
router.delete('/deleteApplication',applyToPromotion.deleteApplication)

module.exports = router