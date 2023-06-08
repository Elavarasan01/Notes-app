const mongoose=require("mongoose");

const notesSchema=mongoose.Schema({
    title :{
        type : String,
        required:[true,"Please add some title"]
    },
    text :{
        type:String,
        required:[true,"Please add some text here"]
    },
    color:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model("Notes",notesSchema);