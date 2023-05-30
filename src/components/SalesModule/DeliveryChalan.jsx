import React from 'react'
import axios from 'axios';
import { useState,useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
const DeliveryChalan = () => {
  const {id}=useParams()
  const salesid=id
const [custdetails, setCustDetails] = useState([]);
  const [itemdetails, setItemDetails] = useState([]);
  const [chalan,setChalan]=useState({
    refno:'',
    deliverydate: '',
    salesid:''
})
const inputHandler=(event)=>{
    event.preventDefault();
    const {name,value}=event.target
    setChalan((previousState)=>({
        ...previousState,
        [name]:value
    }))
}

  // useEffect(() => {
  //   axios.post("http://localhost:3002/deliverychallan").then((response) => {
  //     setCustDetails(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios.post("http://localhost:3002/getitemdata").then((response) => {
  //     setItemDetails(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  const addDeliveryChalan = (e) => {
    e.preventDefault();
    const res1=axios.post("http://localhost:3002/deliverychallan",chalan)
          
              console.log(res1)
              if (res1.statusText==="OK") {
                alert("customer details successfully Added");
              }
      
       
    }
   
  // const addSalesOrder = (data) => {
  //   console.log(data);
  //   console.log(data.customername)
  //   fetch("http://localhost:3002/salesorder", {
  //     method: "POST",
  //     body: ({
  //       customername: data.customername,
  //       itemname: data.itemname,
  //       adress:data.address,
  //       squantity: data.squantity,
  //       shipcost: data.shipcost,
  //       sodate: data.sodate,
  //       status: "confirmed",
  //     }),
  //     // headers: {
  //     //   "Content-Type": "application/json",
  //     // },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  //   // reset();
  // };

  
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
         
         <div className='bg-white p-3 rounded w-50' >
             <form action=''>
               <div className='p-3 w-20'>
                 <h1>ADD Challan</h1>
               </div>
               {/* <div className='mb-3'>
                  <label htmlFor='custname'>cust Name</label>
                  <select name="customername"  style={{width:"100%",height:"40px"}}  onChange={inputHandler} value={sales.customername}>
                         <option selected>Select</option>
                         {custdetails.map((val, key) => (
                  <option key={key} value={val.email}>
                    {val.email}
                  </option>
                ))}                      
             </select>

            </div> */}
               {/* <div className='mb-3'>
                  <label htmlFor='itemname'>Item Name</label>
                  <select name="itemname"  style={{width:"100%",height:"40px"}}  onChange={inputHandler} value={sales.itemname}>
                         <option selected>Select</option>
                         {itemdetails.map((val, key) => (
                  <option key={key} value={val._id}>
                    {val.itemname}
                  </option>
                ))}                      
             </select>
               </div> */}
               <div className='mb-3'>
                  <label htmlFor='refno'>Reference Number</label>
                  <input type="text" placeholder='Enter refno' name="refno" className='form-control rounded-0' onChange={inputHandler} value={chalan.refno}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='shipcost'>Deliverydate</label>
                  <input type="date" placeholder='Enter date' name="deliverydate" className='form-control rounded-0' onChange={inputHandler} value={chalan.deliverydate}/>
               </div>
               {/* <div className='mb-3'>
                  <label htmlFor='sodate'>Item Name</label>
                  <input type="date" placeholder='Enter sodate' name="sodate" className='form-control rounded-0' onChange={inputHandler} value={sales.sodate}/>
               </div> */}
               
               
               
               
               <button type="button" className='btn btn-success' onClick={addDeliveryChalan}>Submit</button>
             </form>
         </div>
     </div>

  )
}

export default DeliveryChalan