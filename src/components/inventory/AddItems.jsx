import React,{useState} from 'react'
import axios from "axios";
const AddItems = () => {

   const [itemname,setItemName]=useState("");
   const [unit,setUnit]=useState("");
   const [dimension,setDimension]=useState("");
   const [weight,setWeight]=useState("");
   const [mfacturer,setMfacturer]=useState("");
   const [brand,setBrand]=useState("");
   const [sprice,setSprice]=useState("");
   const [cprice,setCprice]=useState("");
   const [description,setDescription]=useState("");
   const [ostock,setOstock]=useState("");
   const [reorderpoint,setReorderPoint]=useState("");
   const [pvendor,setPVendor]=useState("");
   const [file,setFile]=useState("");
   console.log(itemname) ;
   console.log(unit) ;
   console.log(pvendor);
   const setData=(e)=>{
      e.preventDefault();
      const{value}=e.target;
      setItemName(value);
      setUnit(value);
      setDimension(value);
      setWeight(value);
      setMfacturer(value);
      setBrand(value);
      setSprice(value);
      setCprice(value);
      setDescription(value);
      setOstock(value);
      setReorderPoint(value);
      setPVendor(value);

   }

   const setimgfile=(e)=>{
      console.log(e.target.files[0])
      setFile(e.target.files[0])
   }

   //additem data

   const addItemData=async(e)=>{
      e.preventDefault();
      var formData=new FormData();
      
      formData.append("itemname",itemname);
      formData.append("unit",unit);
      formData.append("dimension",dimension);
      formData.append("weight",weight);
      formData.append("mfacturer",mfacturer);
      formData.append("brand",brand);
      formData.append("sprice",sprice);
      formData.append("cprice",cprice);
      formData.append("description",description);
      formData.append("ostock",ostock);
      formData.append("reorderpoint",reorderpoint);
      formData.append("pvendor",pvendor);
      formData.append("photo",file);
      const config={
         headers:{
             "Content-Type":"multipart/form-data"
         }
     }
      
      const res=await axios.post("http://localhost:3002/additem",formData,config)

      console.log(res);
      if (res.statusText==="OK") {
         alert("Items successfully Added");
     }    
   }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-120'>
         
        <div className='bg-white p-3 rounded w-20' >
            <form action=''>
              <div className='p-3 w-20'>
                <h1>ADD ITEMS</h1>
              </div>
              <div className='mb-3'>
                 <label htmlFor='itemname'>Item Name</label>
                 <input type="text" placeholder='Enter Item Name' name="itemname" className='form-control rounded-0' onChange={(e)=>setItemName(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='unit'>Unit</label>
                 <input type="text" placeholder='Enter Unit' name="unit" className='form-control rounded-0'onChange={(e)=>setUnit(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='dimensions'>Dimensions</label>
                 <input type="text" placeholder='Enter Dimensions' name="dimension" className='form-control rounded-0' onChange={(e)=>setDimension(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='weight'>Weight</label>
                 <input type="text" placeholder='Enter Weight' name="weight" className='form-control rounded-0' onChange={(e)=>setWeight(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='manufacturer'>Manufacturer</label>
                 <input type="text" placeholder='Enter Manufacturer' name="mfacturer" className='form-control rounded-0' onChange={(e)=>setMfacturer(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='brand'>Brand</label>
                 <input type="text" placeholder='Enter Brand' name="brand" className='form-control rounded-0' onChange={(e)=>setBrand(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='sellingprice'>Selling Price</label>
                 <input type="text" placeholder='Enter selling Price' name="sprice" className='form-control rounded-0' onChange={(e)=>setSprice(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='costprice'>Cost Price</label>
                 <input type="text" placeholder='Enter Cost Price' name="cprice" className='form-control rounded-0' onChange={(e)=>setCprice(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='description'>Descripion</label>
                 < textarea placeholder='Enter Description' name="description" className='form-control rounded-0' onChange={(e)=>setDescription(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='openingstock'>Opening Stock</label>
                 <input type="text" placeholder='Enter Opening Stock' name="ostock" className='form-control rounded-0' onChange={(e)=>setOstock(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='reorderpoint'>Reorder Point</label>
                 <input type="text" placeholder='Enter Reorder Point' name="reorderpoint" className='form-control rounded-0' onChange={(e)=>setReorderPoint(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='preferredvendor'>Preferred Vendor</label>
                 <input type="text" placeholder='Enter Preferred Vendor' name="pvendor" className='form-control rounded-0' onChange={(e)=>setPVendor(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='imageofitem'>Image of Item</label>
                 <input type="file" placeholder='Upload image' name="photo" className='form-control rounded-0 itemphoto' onChange={setimgfile}/>
              </div>
              <button type="button" className='btn btn-success' onClick={addItemData}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddItems