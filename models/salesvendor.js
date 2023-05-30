const Mongoose=require("mongoose");
const VendorSchema=Mongoose.Schema(
    {
      vendorid :{
        type:String,
        required:true
      }, 
      fullname:{
        type:String,
        required:true
      },
      type:{
        type:String,
        required:true
      },
      creationdate:{
        type:Date,
        required:true
      },
      address:{
        type:String,
        required:true
      },
      city:{
        type:String,
        required:true
      },
      postalcode:{
        type:String,
        required:true
      },
      country:{
        type:String,
        required:true
      },
      phonenumber:{
        type:Number,
        required:true
      },
      email:{
        type:String,
        required:true
      }
      
      
    }
);
const VendorModel=Mongoose.model("vendors",VendorSchema);
module.exports=VendorModel;