import React,{useState} from 'react'
import axios from "axios";
const  Adjustments = () => {

   const [modeofadjustment,setModeofAdjustment]=useState("");
   const [referencenumber,setReferenceNumber]=useState("");
   const [date,setDate]=useState("");
   const [reason,setReason]=useState("");
   const [description,setDescription]=useState("");
   const [itemdetails,setItemDetails]=useState("");
   
   const [file,setFile]=useState("");
   console.log(modeofadjustment) ;
   console.log(referencenumber) ;
   console.log(date);
   const setData=(e)=>{
      e.preventDefault();
      const{value}=e.target;
      setModeofAdjustment(value);
      setReferenceNumber(value);
      setDate(value);
      setReason(value);
      setDescription(value);
      setItemDetails(value);
      
      

   }

   const setimgfile=(e)=>{
      console.log(e.target.files[0])
      setFile(e.target.files[0])
   }

   //additem data

   const addAdjustmentData=async(e)=>{
      e.preventDefault();
      var formData=new FormData();
      
      formData.append("modeofadjustment",modeofadjustment);
      formData.append("referencenumber",referencenumber);
      formData.append("date",date);
      formData.append("reason",reason);
      formData.append("description",description);
      formData.append("itemdetails",itemdetails);
      formData.append("uploadfile",file);
      
      const config={
         headers:{
             "Content-Type":"multipart/form-data"
         }
     }
      
      const res=await axios.post("http://localhost:3002/addadjustment",formData,config)

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
                <h1>ADD ADUSTMENT</h1>
              </div>
              <div className='mb-3'>
                 <label htmlFor='modeofadjustment'>Mode of Adjustment</label>
                 <input type="text" placeholder='Enter modeofadjustment' name="modeofadjustment" className='form-control rounded-0' onChange={(e)=>setModeofAdjustment(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='referencenumber'>Reference Number</label>
                 <input type="text" placeholder='Enter referencenumber' name="referencenumber" className='form-control rounded-0'onChange={(e)=>setReferenceNumber(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='date'>Date</label>
                 <input type="date" placeholder='Enter Date' name="date" className='form-control rounded-0' onChange={(e)=>setDate(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='reason'>Reason</label>
                 <input type="text" placeholder='Enter Reason' name="weight" className='form-control rounded-0' onChange={(e)=>setReason(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='description'>Description</label>
                 <input type="text" placeholder='Enter Description' name="description" className='form-control rounded-0' onChange={(e)=>setDescription(e.target.value)}/>
              </div>
              <div className='mb-3'>
                 <label htmlFor='itemdetails'>Brand</label>
                 <input type="text" placeholder='Enter Itemdetails' name="itemdetails" className='form-control rounded-0' onChange={(e)=>setItemDetails(e.target.value)}/>
              </div>
              
              
              
              <div className='mb-3'>
                 <label htmlFor='imageofitem'>Image of Item</label>
                 <input type="file" placeholder='Upload image' name="uploadfile" className='form-control rounded-0 itemphoto' onChange={setimgfile}/>
              </div>
              <button type="button" className='btn btn-success' onClick={addAdjustmentData}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Adjustments