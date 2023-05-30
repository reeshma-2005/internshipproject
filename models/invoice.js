const Mongoose=require("mongoose");
const InvoiceSchema=Mongoose.Schema(
    {
        salesorderid:
        {
            type: String,
            // require: true
        },
        invoiceid:
        {
            type: String,
            // require: true
        },
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
        idate:
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
const InvoiceModel=Mongoose.model("invoice",InvoiceSchema);
module.exports=InvoiceModel;