const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true,
    },
    udirectURL:{
        type: String,
        required: true,
    },
    visitHistory:[{timestamp:{tupe:Number}}],
},
    {timesemps:true}
);


const urlModel = mongoose.model("url", urlSchema);
module.exports = urlModel;