const RequestPromotion = require('../Model/RequestPromotion');
const ApplyToPromotion = require('../Model/ApplyToPromotion');

// const RequestPromotio

exports.createRequest=(req, res)=>{
    // console.log( typeof req.body.price)
    try {
        const requestPromo = new RequestPromotion({
            userId:1,
            title:req.body.title,
            description: req.body.description,
            brandDescription: req.body.brandDescription,
            category: req.body.category,
            budget: req.body.budget,
            platforms: ["insta"]
            // applicants:[]
        })
        console.log(requestPromo)
        requestPromo.save()
        
    } catch (error) {
        console.log(error)
    }

    res.send('hello').status(200)
}
exports.getAllRequest=async(req,res)=>{
    try {
        console.log('get all')
        await RequestPromotion.find()
        .exec()
        .then(requestPromo => res.json(requestPromo).status(200))
        .catch(err =>
            res.status(500).send({ "error": err.message })
        )
    } catch (error) {
        res.send({error,failed:"true"}).status(400)
    }
}
exports.getByRequestId= async(req, res)=>{
    const {requestId} = req.query
    try {
        console.log(requestId )
        console.log('get all')
        await RequestPromotion.find()
        .exec()
        .then(requestPromo =>{
            let promo = requestPromo.filter(promotion => promotion._id == requestId.toString() ? promotion : null )
            // if(requestPromo._id === requestId) 
            console.log(promo,'next')
            if(promo[0])res.json(promo).status(200)
            else res.send('no such id').status(400)

        })
        .catch(err =>
            res.status(500).send({ "error": err.message })
        )
    } catch (error) {
        res.send({error,failed:"true"}).status(400)
    }
    // console.log(req.params)
    // res.send('getByRequestId').status(200)
}
exports.getAllRequestByUserId=async(req, res)=>{
     const {userId} = req.body
     const RequestObjectArr = []
    try {

        const requests = await RequestPromotion.find({userId: userId.toString()})
        const applicants = await ApplyToPromotion.find()
        

        
   
      await res.status(200).send({userReuests:requests,appl:RequestObjectArr,'here':'dap'})
    } catch (error) {
        res.send({error,failed:"true"}).status(400)
    }
    // console.log('here', console.log(RequestObjectArr))
    // console.log(req.params)
    // res.send('getAllRequestByUserId').status(200)
}
exports.updateRequestById=(req, res)=>{
    console.log(req.params)
    res.send('updateRequestById').status(200)
}
exports.deleteByRequestId=(req, res)=>{
    console.log(req.params)
    res.send('deleteByRequestId').status(200)
}