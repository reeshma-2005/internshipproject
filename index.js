const Express=require("express");
const Mongoose=require("mongoose");
const BodyParser=require("body-parser");
const Cors=require("cors")
const multer=require("multer");
const ItemModel=require("./models/invitems");
const ItemGroupModel=require("./models/invitemgroup")
const AdjustmentModel=require("./models/invadjustments")
const CustomerModel=require("./models/salescustomer")
const VendorModel=require('./models/salesvendor')
const SalesorderModel=require('./models/salesorder')
const PackageModel=require('./models/package')
const DeliveryChallanModel=require('./models/deliverychallans')
const InvoiceModel=require('./models/invoice')
const app=new Express();
app.use("/uploads",Express.static("./uploads"));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.use(Cors());
//img storage path
const imgconfig=multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,"./uploads")
  },
  filename:(req,file,callback)=>{
    callback(null,`image-${Date.now()}.${file.originalname}`)
  }
})

//img filter

const isImage=(req,file,callback)=>{
   if(file.mimetype.startswith("image")){
     callback(null,true)
   }else{
      callback(new Error("only images is allowed"))
   }
}
const upload=multer({
  storage:imgconfig,
  filefilter:isImage
})
Mongoose.connect("mongodb+srv://reeshmasreenath81:reeshmasreenath81@cluster0.j6gueyg.mongodb.net/InventoryDB?retryWrites=true&w=majority",{useNewUrlParser:true});

app.post("/additem",upload.single("photo"),async(req,res)=>{

    let data1={
      itemname:req.body.itemname,
      unit:req.body.unit,
      dimension:req.body.dimension,
      weight:req.body.weight,
      mfacturer:req.body.mfacturer,
      brand:req.body.brand,
      sprice:req.body.sprice,
      cprice:req.body.cprice,
      description:req.body.description,
      ostock:req.body.ostock,
      reorderpoint:req.body.reorderpoint,
      pvendor:req.body.pvendor,
      photo:req.file.path

    }
    console.log(data1);
    const newItem=new ItemModel(data1);
    const saveItem=await newItem.save();
    res.json(saveItem);
    console.log(saveItem);
    // await newItem.save(
    //   (error,data)=>{
    //       if (error) {
    //         res.json({"Status":"error"})
    //       } else {
    //         res.json({"Status":"Success","Data":data})
    //       }
    //   }
    // )
      
  
  

})

//get item details

app.post("/getitemdata",async(req,res)=>{
  try{
    const getItem=await ItemModel.find();
    console.log(getItem)
    
    res.send(getItem);
  }catch(error){
    res.status(401).json({status:401,error})
  }
})

//add itemgroup
// app.post("/additemgroup",async(req,res)=>{
//   const newItemgroup=new ItemGroupModel(req.body);
//   console.log(req.body);
//   await newItemgroup.save((error,data)=>{
//     if(data){
//       res.json({"Status":"Success","Data":data})
//     }
//     else{
//       res.json({"Status":"error","Data":error})
//     }
//   })
// })

app.post("/additemgroup",async(req,res)=>{

  let data1={
    itemname:req.body.itemname,
    itemgroupname:req.body.itemgroupname
    

  }
  console.log(data1);
  const newItemGroup=new ItemGroupModel(data1);
  const saveItemGroup=await newItemGroup.save();
  res.json(saveItemGroup);
  console.log(saveItemGroup);
  
    



})



app.post("/addadjustment",upload.single("uploadfile"),async(req,res)=>{

  let data1={
    modeofadjustment:req.body.modeofadjustment,
    referencenumber:req.body.referencenumber,
    date:req.body.date,
    reason:req.body.reason,
    description:req.body.description,
    itemdetails:req.body.itemdetails,
   
    uploadfile:req.file.path

  }
  console.log(data1);
  const newAdjustment=new AdjustmentModel(data1);
  const saveAdjustment=await newAdjustment.save();
  res.json(saveAdjustment);
  console.log(saveAdjustment);
  // await newItem.save(
  //   (error,data)=>{
  //       if (error) {
  //         res.json({"Status":"error"})
  //       } else {
  //         res.json({"Status":"Success","Data":data})
  //       }
  //   }
  // )
    



})

app.post("/getitemgroupdata",async(req,res)=>{
  try{
    const getItem=await ItemGroupModel.find();
    console.log(getItem)
    // res.status(201).json({status:201,getItem})
    res.send(getItem)
  }catch(error){
    res.status(401).json({status:401,error})
  }
})


app.post("/addcustomer",async(req,res)=>{

  let data1={
    customerid:req.body.customerid,
    fullname:req.body.fullname,
    type:req.body.type,
    creationdate:req.body.creationdate,
    address:req.body.address,
    city:req.body.city,
    postalcode:req.body.postalcode,
    country:req.body.country, 
    phonenumber:req.body.phonenumber,
    email:req.body.email  


  }
  console.log(data1);
  const newCustomer=new CustomerModel(data1);
  const saveCustomer=await newCustomer.save();
  res.json(saveCustomer);
  console.log(saveCustomer);   


})

app.post("/getcustomerdata",async(req,res)=>{
  try{
    const getCustomer=await CustomerModel.find();
    console.log(getCustomer)
    //  res.status(201).send({status:201,getCustomer})
    res.send(getCustomer)
  }catch(error){
    res.status(401).send({status:401,error})
  }
})

//get customer by id

app.post("/getcustomer/:id",async(req,res)=>{
  try {
    console.log(req.params.id);
    const cust=await CustomerModel.findById(req.params.id);
    console.log(cust)
    if(!cust){
        return res.send("not found");
        //  res.send(data);
    }
   else{
    res.send(cust);
   }
  } catch (error) {
    res.status(500).send(error);
    // console.log(error)
  }
})



//update customer details

app.put(`/updatecustomerdata`, async (req, res) => {
  let data = req.body
  try {
    console.log("Customer")
    const customer = await CustomerModel.findByIdAndUpdate(
      data._id,
      {
        customerid:data.customerid,
        fullname: data.fullname,  
        type:data.type ,
        creationdate:data.creationdate,     
        address: data.address, 
        city: data.city, 
        postalcode: data.postalcode, 
        country: data.country, 
        phonenumber: data.phonenumber, 
        email: data.email
      },
      { new: true }
    );

    if (!customer) {
      return res.status(404).json({ message: "customer not found" });
    }

    res.json(customer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }  
})


//delete customer

app.delete('/deletecustomer/:id',(req,re)=>{
  var data=req.params.id;
  console.log(req.params.id);
  CustomerModel.findByIdAndDelete(req.params.id,(err,data)=>{
    console.log(data);
    if(err){
      res.send({"status":"error","Error":err});
    }
    else{
      res.send({"status":"Deleted","Data":data})
    }
  })
})


//addvendor

app.post("/addvendor",async(req,res)=>{

  let data1={
    vendorid:req.body.vendorid,
    fullname:req.body.fullname,
    type:req.body.type,
    creationdate:req.body.creationdate,
    address:req.body.address,
    city:req.body.city,
    postalcode:req.body.postalcode,
    country:req.body.country, 
    phonenumber:req.body.phonenumber,
    email:req.body.email  


  }
  console.log(data1);
  const newVendor=new VendorModel(data1);
  const saveVendor=await newVendor.save();
  res.json(saveVendor);
  console.log(saveVendor);   


})

app.post("/getvendordata",async(req,res)=>{
  try{
    const getVendor=await VendorModel.find();
    console.log(getVendor)
    //  res.status(201).send({status:201,getCustomer})
    res.send(getVendor)
  }catch(error){
    res.status(401).send({status:401,error})
  }
})


// app.delete("/customer/:_id", async (req, res) => {
//   try {
//     var id = req.params._id;
//     var data = req.body;
//     const result = await customerModel.findOneAndDelete({ _id: id }, data);
//     res.send(result);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
// app.put('/updatecustomer',async(req,res)=>{
//   let data=req.body;
//   console.log(data.fullname,data.type,data.email)
//   let id=data._id

//   let customerid=data.customerid
//   let fullname=data.fullname
//   let type=data.type
//   let creationdate=data.creationdate
//   let address=data.address
//   let city=data.city
//   let postalcode=data.postalcode
//   let country=data.country
//   let phonenumber=data.phonenumber
//   let email=data.email
//   try {
//     console.log("customer")
    
//     CustomerModel.findOneAndUpdate({ _id: id }, { $set: { customerid:customerid,fullname:fullname,type:type,creationdate:creationdate, address: address, city: city, postalcode: postalcode, country: country, phoneNumber: phonenumber, email: email } }, { new: true }, (err, data) => {
//         if (data) {
//             res.send({ "status": "Success", "Data": data })
//         }
//         else {
//             res.send({ "status": "error" })
//         }
//     })

// } catch (err) {
//     res.send('Error')
// }
// })
//sales order add
 
app.post("/salesorder", async (req, res) => {
  const { customername, itemname, squantity, shipcost, sodate, status } =
    req.body;

  try {
    const custdetails = await CustomerModel.findOne({ email: customername });
    const itemdetails = await ItemModel.findOne({_id: itemname });

    // if (!itemdetails) {
    //   throw new Error(`Item '${itemname}' not found`);
    // }

    const sq = parseInt(squantity);

    // if (!Number.isInteger(sq)) {
    //   throw new Error(`Invalid quantity '${squantity}'`);
    // }

    const quant = itemdetails.unit - sq;

    // await ItemModel.updateOne(
    //   {
    //     _id: itemname,
    //   },
    //   {
    //     $set: {
    //       unit: quant,
    //     },
    //   }
    // );

    const address = custdetails.address;
    const cid = custdetails._id;
    const sc = parseInt(shipcost);
    const amount = itemdetails.sprice * sq + sc;
    const pamount = amount;

    const newsalesorder = new SalesorderModel({
      customername,
      address,
      cid,
      itemname: itemdetails._id,
      squantity,
      shipcost,
      amount,
      pamount,
      sodate,
      status,
    });

    const saveOrder = await newsalesorder.save();
    if (saveOrder) {
      res.status(201).send({ message: "Sales order added" });
    } else {
      res.status(500).send({ error: "Failed to add" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
});

//package
app.get("/confirmeditems", async (req, res) => {
  try {
    const confirmedItems = await SalesorderModel.find({ status: "confirmed" });

    if (confirmedItems.length === 0) {
      return res.status(404).json({ message: "No confirmed items found" });
    }

    res.status(200).send(confirmedItems);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/salesorder/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await SalesorderModel.findOne({ _id: id });
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/items/:itemname", async (req, res) => {
  try {
    const item = req.params.itemname;
    const result = await ItemModel.findOne({ _id: item });
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.get("/allitems/:_id", async (req, res) => {
  try {
    const item = req.params._id;
    const result = await ItemModel.findOne({ _id: item });
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// app.post("/shipment", async (req, res) => {
//   try {
//     // Extract the data from the request body
//     const { salesid, trackingno, tamount, sdate,status } = req.body;

//     // Create a new shipment object and save it to the database
//     const newShipment = new PackageModel({
//       salesid,
//       trackingnumber,
//       totalamount,
//       status:""
//       // pdate,
//     });
//     await newShipment.save();

//     // Update the status field of the sales order to "shipped"
//     // const salesorder = await SalesorderModel.findOneAndUpdate(
//     //   { _id: salesid },
//     //   { status: "shipment created" },
//     //   { new: true }
//     // );
//     //  //salesorder.save();
//     // // Send a success response
//     // res
//     //   .status(200)
//     //   .json({ message: "Shipment created successfully", "data": salesorder });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// });
app.post("/package",async(req,res)=>{

  let data1={
    salesid:req.body.salesid,
    trackingnumber:req.body.trackingnumber,
    totalamount:req.body.totalamout,
    pdate:req.body.pdate,
    status:"shipment created"
    

  }
  console.log(data1);
  const newpackage=new PackageModel(data1);
  const savePackage=await newpackage.save();
  res.json(savePackage);
  console.log(savePackage);   


})

app.post("/deliverychallan",async(req,res)=>{

  let data1={
    salesid:req.body.salesid,
    ref:req.body.ref,
    deliverydate:req.body.deliverydate

  }
  console.log(data1);
  const newChalan=new DeliveryChallanModel(data1);
  const saveChalan=await newChalan.save();
  res.json(saveChalan);
  console.log(saveChalan);   
  const sales = await SalesorderModel.findOneAndUpdate(
          { _id: req.body.salesid },
          { status: "shipped" },
          { new: true }
        );


})
app.post("/getsalesorderdata",async(req,res)=>{
  try{
    const getSales=await SalesorderModel.find();
    console.log(getSales)
    //  res.status(201).send({status:201,getCustomer})
    res.send(getSales)
  }catch(error){
    res.status(401).send({status:401,error})
  }
})
//invoice
app.post("/invoice",async(req,res)=>{

  let data1={
    invoiceid,
    salesorderid,
    customername,
      address,
      cid,
      itemname,
      squantity,
      shipcost,
      amount,
      pamount,
      idate,
      
    status:"invoice created"
    

  }
  console.log(data1);
  const newinvoice=new InvoiceModel(data1);
  const saveInvoice=await newinvoice.save();
  res.json(saveInvoice);
  console.log(saveInvoice);   


})

// app.post("/deliverychallan", async (req, res) => {
//   const { refno, deliverydate, salesid } = req.body;

//   try {
//     // Store delivery challan data
//     const deliveryChallan = await DeliveryChallanModel.create({
//       refno,
//       deliverydate,
//       salesid,
//     });

//     // Update status of sales schema to "shipped"
//     const sales = await SalesorderModel.findOneAndUpdate(
//       { _id: salesid },
//       { status: "shipped" },
//       { new: true }
//     );

//     res.status(200).json({ deliveryChallan, sales });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message:
//         "Error occurred while storing delivery challan and updating sales status.",
//     });
//   }
// });

// FETCH DELIVERYCHALLANS
app.get("/getdeliverychallan", async (req, res) => {
  try {
    const Items = await DeliveryChallanModel.find();
    res.json(Items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});



app.listen(3002,()=>{
    console.log("server started");
})

