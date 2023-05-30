const Mongoose=require("mongoose");
const PackageSchema=Mongoose.Schema(
    {
        salesid: {
            type: String,
            required: true,
          },
          trackingnumber: {
            type: String,
            required: true,
          },
          totalamount: {
            type: String,
          },
          pdate: {
            type: Date,
            require: false,
          },
          status: {
            type: Date,
            require: false,
          }
    }
);
const PackageModel=Mongoose.model("package",PackageSchema);
module.exports=PackageModel;