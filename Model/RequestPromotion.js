const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const RequestPromotion=new Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    budget:{
        type:String,
        required: true
    },
    brandDescription: {
        type: String
    },
    duration: {
        type: String
    },
    applicants: {
        type: Array,
        default: []
    },
    active: {
        type: Boolean,
        default: true
    },
    platforms: {
        type: Array,
        default: []
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model('RequestPromo', RequestPromotion)