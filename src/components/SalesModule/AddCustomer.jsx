import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const AddCustomer = () => {
    const [customer,setCustomer]=useState({
        customerid:'',
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
        setCustomer((previousState)=>({
            ...previousState,
            [name]:value
        }))
    }

    const addCustomerData=async(e)=>{
        e.preventDefault();
        const res1=axios.post("http://localhost:3002/addcustomer",customer)
          
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
                 <h1>ADD CUSTOMER DETAILS</h1>
               </div>
               <div className='mb-3'>
                  <label htmlFor='customerid'>CustomerId</label>
                  <input type="text" placeholder='Enter customerid' name="customerid" className='form-control rounded-0' onChange={inputHandler} value={customer.customerid}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='fullname'>Full Name</label>
                  <input type="text" placeholder='Enter fullname' name="fullname" className='form-control rounded-0'onChange={inputHandler} value={customer.fullname}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='type'>Type</label>
                  <input type="text" placeholder='Enter Type' name="type" className='form-control rounded-0'onChange={inputHandler} value={customer.type}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='creationdate'>Creation Date</label>
                  <input type="date" placeholder='Enter CreationDate' name="creationdate" className='form-control rounded-0'onChange={inputHandler} value={customer.creationdate}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='address'>Address</label>
                  <textarea  placeholder='Enter address' name="address" className='form-control rounded-0'onChange={inputHandler} value={customer.address}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='city'>City</label>
                  <input type="text" placeholder='Enter City' name="city" className='form-control rounded-0'onChange={inputHandler} value={customer.city}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='postalcode'>Postal Code</label>
                  <input type="text" placeholder='Enter Postalcode' name="postalcode" className='form-control rounded-0'onChange={inputHandler} value={customer.postalcode}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='country'>Country</label>
                  <input type="text" placeholder='Enter country' name="country" className='form-control rounded-0'onChange={inputHandler} value={customer.country}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='phonenumber'>Phonenumber</label>
                  <input type="text" placeholder='Enter Phone Number' name="phonenumber" className='form-control rounded-0'onChange={inputHandler} value={customer.phonenumber}/>
               </div>
               
               <div className='mb-3'>
                  <label htmlFor='email'>Email</label>
                  <input type="text" placeholder='Enter email' name="email" className='form-control rounded-0'onChange={inputHandler} value={customer.email}/>
               </div>
               
               
               <button type="button" className='btn btn-success' onClick={addCustomerData}>Submit</button>
             </form>
         </div>
     </div>

  )
}

export default AddCustomer