import React from 'react'
import axios from 'axios';
import { useState,useEffect} from 'react';
const SalesOrders = () => {
const [custdetails, setCustDetails] = useState([]);
  const [itemdetails, setItemDetails] = useState([]);
  const [sales,setSales]=useState({
    customername:'',
    itemname: '',
    squantity: '',
    shipcost: '',
    sodate: '',
    status: "confirmed",
})
const inputHandler=(event)=>{
    event.preventDefault();
    const {name,value}=event.target
    setSales((previousState)=>({
        ...previousState,
        [name]:value
    }))
}

  useEffect(() => {
    axios.post("http://localhost:3002/getcustomerdata").then((response) => {
      setCustDetails(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    axios.post("http://localhost:3002/getitemdata").then((response) => {
      setItemDetails(response.data);
      console.log(response.data);
    });
  }, []);

  const addSalesOrder = (e) => {
    e.preventDefault();
    const res1=axios.post("http://localhost:3002/salesorder",sales)
          
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
                 <h1>ADD Sales Orders</h1>
               </div>
               <div className='mb-3'>
                  <label htmlFor='custname'>cust Name</label>
                  <select name="customername"  style={{width:"100%",height:"40px"}}  onChange={inputHandler} value={sales.customername}>
                         <option selected>Select</option>
                         {custdetails.map((val, key) => (
                  <option key={key} value={val.email}>
                    {val.email}
                  </option>
                ))}                      
             </select>

            </div>
               <div className='mb-3'>
                  <label htmlFor='itemname'>Item Name</label>
                  <select name="itemname"  style={{width:"100%",height:"40px"}}  onChange={inputHandler} value={sales.itemname}>
                         <option selected>Select</option>
                         {itemdetails.map((val, key) => (
                  <option key={key} value={val._id}>
                    {val.itemname}
                  </option>
                ))}                      
             </select>
               </div>
               <div className='mb-3'>
                  <label htmlFor='squantity'>SQuantity</label>
                  <input type="text" placeholder='Enter squantity' name="squantity" className='form-control rounded-0' onChange={inputHandler} value={sales.squantity}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='shipcost'>shipcost</label>
                  <input type="text" placeholder='Enter Shipcost' name="shipcost" className='form-control rounded-0' onChange={inputHandler} value={sales.shipcost}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='sodate'>Item Name</label>
                  <input type="date" placeholder='Enter sodate' name="sodate" className='form-control rounded-0' onChange={inputHandler} value={sales.sodate}/>
               </div>
               
               
               
               
               <button type="button" className='btn btn-success' onClick={addSalesOrder}>Submit</button>
             </form>
         </div>
     </div>

  )
}

export default SalesOrders