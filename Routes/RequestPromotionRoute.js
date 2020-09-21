const express = require('express');
const router = express.Router();
const RequestPromotion = require('../Controller/RequestPromotion')

router.post('/newRequestPromo', RequestPromotion.createRequest)
router.get('/getAllRequest', RequestPromotion.getAllRequest)
router.get('/getRequestByRequestId', RequestPromotion.getByRequestId)
router.post('/getRequestByUser', RequestPromotion.getAllRequestByUserId)
router.patch('/updateRequest', RequestPromotion.updateRequestById)
router.delete('/deleteRequest', RequestPromotion.deleteByRequestId)


module.exports = router