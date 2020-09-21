const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const ApplyToPromo = new Schema({
    userId: {
        type: String,
        required: true,
    },userDetails: {
        type: Object,
        required: true,
        default:{userName: null, analytic: null}
    },
    requestPromotionId:{
        type: String,
        required: true
    },
    pitch: {
        type: String,
        require: true
    },
    duration: {
        type: String
    },
    accounts: {
        type: Array,
        default:[]
    },
    budget: {
        type: String,
        required:true
    },
    active: {
        type: Boolean,
        default: true
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

module.exports=mongoose.model('ApplyToPromo', ApplyToPromo)