const Mongoose=require("mongoose");
const ItemGroupSchema=Mongoose.Schema(
    {
      itemname :{
        type:String,
        required:true
      }, 
      itemgroupname:{
        type:String,
        required:true
      }
      
    }
);
const ItemGroupModel=Mongoose.model("itemgroups",ItemGroupSchema);
module.exports=ItemGroupModel;