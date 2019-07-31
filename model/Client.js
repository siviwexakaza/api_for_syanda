const mongoose = require('mongoose');
const ClientSchema = mongoose.Schema({
    isActive:{
        type: Boolean,
        default: true
    },
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model('Client',ClientSchema);