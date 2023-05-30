import React,{useEffect,useState} from 'react'
import {useNavigate,useParams,Link} from 'react-router-dom'

import axios from 'axios';
import DisplayVendors from './DisplayVendors';
import NavVendor from './NavVendor';
const EditVendor = () => {
   const [venddata,setVendData]=useState("");
   const navigate=useNavigate();
   const {vendid}=useParams();
   const [vendorid,vendoridChange]=useState("");
   const [fullname,fullnameChange]=useState("");
   const [type,typeChange]=useState("");
   const [creationdate,creationdateChange]=useState("");
   const [address,addressChange]=useState("");
   const [city,cityChange]=useState("");
   const [postalcode,postalcodeChange]=useState("");
   const [country,countryChange]=useState("");  
   const [phonenumber,phonenumberChange]=useState(""); 
   const [email,emailChange]=useState("");
   
   useEffect(() => {
      loadVendor();
    }, [])

   const loadVendor=()=>{
      console.log(vendid);
      axios.post(`http://localhost:3002/getvendordata/`+vendid)
      .then(
         (res)=>{
            
            vendoridChange(res.data.vendorid)
            fullnameChange(res.data.fullname)
            typeChange(res.data.type)
            creationdateChange(res.data.creationdate)
            addressChange(res.data.address)
            cityChange(res.data.city)
            postalcodeChange(res.data.postalcode)
            countryChange(res.data.country)
            phonenumberChange(res.data.phonenumber)
            emailChange(res.data.email)
            
         }
      ).catch((error)=>{
         console.log(error)
      })
   }

   // const loadCustomer=async(e)=>{
   //    e.preventDefault();
   //    const res1=axios.post(`http://localhost:3002/customer/${custid}`)
        
   //          console.log(res1)
   //          if (res1.statusText==="OK") {
   //            alert("customer details successfully Added");
   //          }
   //      }

   const updateVendor=(e)=>{
      e.preventDefault();
      const _id = vendid
      const venddata = { _id,vendorid, fullname,type, creationdate, address, city, postalcode, country, phonenumber, email };
      console.log(venddata)
      axios.put(`http://localhost:3002/updatevendordata`, venddata)
          .then((response) => {
              console.log(response.data)
              alert("updated Successfuly");
                  navigate('/displayvendor')
              
          })
          .catch((error) => {
              console.log(error)
          })
     
      // const backCustomer1=()=>{
      //    navigate("/displaycustomer")
      // }
   }
  return (
    <div>
      <NavVendor/>  
      <div className='d-flex justify-content-center align-items-center bg-secondary vh-120'>
         
         <div className='bg-white p-3 rounded w-50' >
             <form action=''>
               <div className='p-3 w-20'>
                 <h1>UPDATE Vendor DETAILS</h1>
               </div>
               <div className='mb-3'>
                  <label htmlFor='customerid'>CustomerId</label>
                  <input type="text" placeholder='Enter vendorid' name="customerid" className='form-control rounded-0' onChange={(e)=>vendoridChange(e.target.value)} value={vendorid}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='fullname'>Full Name</label>
                  <input type="text" placeholder='Enter fullname' name="fullname" className='form-control rounded-0' onChange={(e)=>fullnameChange(e.target.value)} value={fullname}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='type'>Type</label>
                  <input type="text" placeholder='Enter Type' name="type" className='form-control rounded-0' onChange={(e)=>typeChange(e.target.value)} value={type}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='creationdate'>Creation Date</label>
                  <input type="date" placeholder='Enter CreationDate' name="creationdate" className='form-control rounded-0' onChange={(e)=>creationdateChange(e.target.value)} value={creationdate}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='address'>Address</label>
                  <textarea  placeholder='Enter address' name="address" className='form-control rounded-0' onChange={(e)=>addressChange(e.target.value)} value={address}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='city'>City</label>
                  <input type="text" placeholder='Enter City' name="city" className='form-control rounded-0' onChange={(e)=>cityChange(e.target.value)} value={city}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='postalcode'>Postal Code</label>
                  <input type="text" placeholder='Enter Postalcode' name="postalcode" className='form-control rounded-0' onChange={(e)=>postalcodeChange(e.target.value)} value={postalcode}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='country'>Country</label>
                  <input type="text" placeholder='Enter country' name="country" className='form-control rounded-0' onChange={(e)=>countryChange(e.target.value)} value={country}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='phonenumber'>Phonenumber</label>
                  <input type="text" placeholder='Enter Phone Number' name="phonenumber" className='form-control rounded-0' onChange={(e)=>phonenumberChange(e.target.value)} value={phonenumber}/>
               </div>
               
               <div className='mb-3'>
                  <label htmlFor='email'>Email</label>
                  <input type="text" placeholder='Enter email' name="email" className='form-control rounded-0' onChange={(e)=>emailChange(e.target.value)} value={email}/>
               </div>
               
               
               <button type="button" className='btn btn-success' onClick={updateVendor}>UPDATE</button>
               {/* <button type="button" className='btn btn-success' name="back" onClick="">BACK</button> */}
               {/* <td><button type="button" class="btn btn-primary" component={Link} to={`/displaycustomer`}>EDIT</button></td> */}
             </form>
         </div>
     </div>
    </div>
  )
}

export default EditVendor