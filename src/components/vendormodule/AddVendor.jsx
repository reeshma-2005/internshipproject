import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const AddVendor = () => {
    const [vendor,setVendor]=useState({
        vendorid:'',
        fullname:'',
        type:'',
        creationdate:'',
        address:'',
        city:'',
        postalcode:'',
        country:'', 
        phonenumber:'',
        email:''  
    })

    const inputHandler=(event)=>{
        event.preventDefault();
        const {name,value}=event.target
        setVendor((previousState)=>({
            ...previousState,
            [name]:value
        }))
    }

    const addVendorData=async(e)=>{
        e.preventDefault();
        const res1=axios.post("http://localhost:3002/addvendor",vendor)
          
              console.log(res1)
              if (res1.statusText==="OK") {
                alert("customer details successfully Added");
              }
          }
    
  return (
    
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-120'>
         
         <div className='bg-white p-3 rounded w-50' >
             <form action=''>
               <div className='p-3 w-20'>
                 <h1>ADD VENDOR DETAILS</h1>
               </div>
               <div className='mb-3'>
                  <label htmlFor='vendorid'>VendorId</label>
                  <input type="text" placeholder='Enter vendorid' name="vendorid" className='form-control rounded-0' onChange={inputHandler} value={vendor.vendorid}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='fullname'>Full Name</label>
                  <input type="text" placeholder='Enter fullname' name="fullname" className='form-control rounded-0'onChange={inputHandler} value={vendor.fullname}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='type'>Type</label>
                  <input type="text" placeholder='Enter Type' name="type" className='form-control rounded-0' onChange={inputHandler} value={vendor.type}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='creationdate'>Creation Date</label>
                  <input type="date" placeholder='Enter CreationDate' name="creationdate" className='form-control rounded-0'onChange={inputHandler} value={vendor.creationdate}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='address'>Address</label>
                  <textarea  placeholder='Enter address' name="address" className='form-control rounded-0'onChange={inputHandler} value={vendor.address}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='city'>City</label>
                  <input type="text" placeholder='Enter City' name="city" className='form-control rounded-0'onChange={inputHandler} value={vendor.city}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='postalcode'>Postal Code</label>
                  <input type="text" placeholder='Enter Postalcode' name="postalcode" className='form-control rounded-0'onChange={inputHandler} value={vendor.postalcode}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='country'>Country</label>
                  <input type="text" placeholder='Enter country' name="country" className='form-control rounded-0'onChange={inputHandler} value={vendor.country}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='phonenumber'>Phonenumber</label>
                  <input type="text" placeholder='Enter Phone Number' name="phonenumber" className='form-control rounded-0'onChange={inputHandler} value={vendor.phonenumber}/>
               </div>
               
               <div className='mb-3'>
                  <label htmlFor='email'>Email</label>
                  <input type="text" placeholder='Enter email' name="email" className='form-control rounded-0'onChange={inputHandler} value={vendor.email}/>
               </div>
               
               
               <button type="button" className='btn btn-success' onClick={addVendorData}>Submit</button>
             </form>
         </div>
     </div>

  )
}

export default AddVendor