const axios = require('axios')
const ApplyToPromotion = require('../Model/ApplyToPromotion');
const RequestPromotion = require('../Model/RequestPromotion');

exports.applyToPromotionRequest=async(req, res)=>{
 
    // console.log(typeof req.body.price)
    const {requestId, userId} = req.body
    try {
        const user = await axios.post("http://localhost:3003/user/findUserById",{"userId": userId})
        const requestPromoObj = await RequestPromotion.findById(requestId)
        const applyToPromotion = new ApplyToPromotion({
            userId: userId,
            userDetails:{userName: user.data.userName, analytic: null},
            requestPromotionId: requestId,
            pitch: req.body.pitch,
            duration: "duration",
            budget: req.body.price
        })

        if(requestPromoObj.active === false)res.send("RequestPromo is not active").status(221)
        else if(requestPromoObj.active && user.status === 200){
            applyToPromotion.save()
            await RequestPromotion.findOneAndUpdate({_id:requestPromoObj._id},{"$push": {applicants: applyToPromotion}})
            
            res.send({success:`successfully applied to ${requestPromoObj.title}`}).status(200)
        }else res.send({errorDetail:"no such Promotion Requested"}).status(200)
    } catch (error) {
        res.send({error}).status(400)
    }
}
exports.allApplicationsByRequestId=(req, res)=>{
    console.log(req.params)
    const {requestId} = req.body
    try {
        ApplyToPromotion.find()
        .exec()
        .then(application =>{
            application.filter(app => app.requestPromotionId === requestId)
            res.json(application)
        })
        .catch(err =>
            res.status(500).send({ "error": err.message })
        )

    } catch (error) {
        
    }
    res.send('allApplicationsByRequestId').status(200)
}
exports.getApplicationByUserId=(req, res)=>{

    const {userId} = req.body
    ApplyToPromotion.find({})
    .exec()
    .then(application =>{
        application.filter(app => app.userId === userId)
        res.json(application).status(200)
    })
    .catch(err =>
        res.send({ "error": err.message }).status(400)
    )

    // res.send('getApplicationByUserId').status(200)
    console.log('get user by apply id')
}
exports.deleteApplication=(req, res)=>{
    console.log(req.params)
    res.send('deleteApplication').status(200)
}