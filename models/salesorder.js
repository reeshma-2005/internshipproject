const Mongoose=require("mongoose");
const SalesorderSchema=Mongoose.Schema(
    {
        customername:
        {
            type: String,
            // require: true
        },
        address:
        {
            type: String,
            // require: true
        },
        cid:
        {
            type: String
        },
        itemname:
        {
            type: String,
            // require: true
        },
        squantity:
        {
            type: String,
            // require: true
        },
        shipcost:
        {
            type: String,
            // require: true
        },
        amount:
        {
            type: String,
            // require: true
        },
        pamount:
        {
            type: String,
            // require: true
        },
        sodate:
        {
            type: Date,
            // require: true
        },
        status:
        {
            type: String,
            // require: true
        }
      
      
    }
);
const SalesorderModel=Mongoose.model("salesorder",SalesorderSchema);
module.exports=SalesorderModel;