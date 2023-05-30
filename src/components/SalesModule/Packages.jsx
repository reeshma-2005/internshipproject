import React from 'react'
import axios from 'axios';
import { useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
const Packages = () => {
 const [cdetails, setcdetails] = useState([]);
  const [idetails, setidetails] = useState();
  const [sales, setSales] = useState();
const [tracking, setTracking] = useState();
const [totalamount, setTotalAmount] = useState();
  const [selectedSalesId, setSelectedSalesId] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  const cdate = currentDate.toLocaleString();
  const [custdetails, setCustDetails] = useState([]);
  const [itemdetails, setItemDetails] = useState([]);
  const [packing,setPacking]=useState({
    salesid:'',
        
    trackingnumber: '',
   totalamount:'',
     pdate: ''
    // status: "packed",
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
    axios.get("http://localhost:3002/confirmeditems").then((response) => {
      setcdetails(response.data);
    });
  }, []);


  const handleSalesIdChange = (salesId) => {
    setSelectedSalesId(salesId);
    console.log(salesId);
    axios.get(`http://localhost:3002/salesorder/${salesId}`).then((response) => {
      setSales(response.data);
      const itemname = response.data.itemname;

      axios.get(`http://localhost:3002/items/${itemname}`).then((response) => {
        setidetails(response.data);
      });
    });
  };

  const onAddPackage = (e) => {
    e.preventDefault();
    const res1=axios.post("http://localhost:3002/shipment",packing)
          
              console.log(res1)
              if (res1.statusText==="OK") {
                alert(" details successfully Added");
              }
      
       
    }

  // const onAddPackage = async (data) => {
    

  //   console.log(data);
  //  const res=axios.post ("http://localhost:3002/shipment", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       salesid: data.salesid,
        
  //       trackingnumber: data.trackingnumber,
  //       totalamount: data.toalamount,
  //       pdate: cdate,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
    
  // };
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
         
    <div className='bg-white p-3 rounded w-50' >
        <form action=''>
          <div className='p-3 w-20'>
            <h1>ADD Sales Orders</h1>
          </div>
          <div className='mb-3'>
             <label htmlFor='saleid'>Salesid</label>
             <select name="customername"  style={{width:"100%",height:"40px"}}  value={selectedSalesId} onChange={(e) => handleSalesIdChange(e.target.value)}>
                    <option selected>Select</option>
                    {cdetails.map((val, key) => (
             <option key={key} value={val._id}>
               {val._id}
             </option>
           ))}                      
        </select>

       </div>
          <div className='mb-3'>
             <label htmlFor='squantity'>Tracking number</label>
             <input type="text" placeholder='Enter tracking number' name="trackingnumber" className='form-control rounded-0' onChange={(e)=>setTracking(e.target.value)}/>
          </div>
          <div className='mb-3'>
             <label htmlFor='Totalamount'>Amount</label>
             <input type="text" placeholder='Enter amount' name="totalamount" className='form-control rounded-0' onChange={(e)=>setTotalAmount(e.target.value)}/>
          </div>
          {/* <div className='mb-3'>
             <label htmlFor='sodate'>Item Name</label>
             <input type="date" placeholder='Enter sodate' name="sodate" className='form-control rounded-0' onChange={inputHandler} value={sales.sodate}/>
          </div> */}
          
          
          
          
          <button type="button" className='btn btn-success' onClick={onAddPackage}>Submit</button>
        </form>
    </div>
</div>
  )
}

export default Packages