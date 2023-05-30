const Mongoose=require("mongoose");
const AdjustmentSchema=Mongoose.Schema(
    {
      modeofadjustment :{
        type:String,
        required:true
      }, 
      referencenumber:{
        type:String,
        required:true
      },
      date:{
        type:Date,
        required:true
      },
      reason:{
        type:String,
        required:true
      },
      description:{
        type:String,
        required:true
      },
      itemdetails:{
        type:String,
        required:true
      },
      uploadfile:{
        type:String,
        required:true
      }
      
      
    }
);
const AdjustmentModel=Mongoose.model("adjustment",AdjustmentSchema);
module.exports=AdjustmentModel;