import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import EditVendor from './EditVendor';

const DisplayVendors = () => {

  const [vendordata,setVendorData]=useState([])
  
  const navigate =useNavigate();
  

  useEffect(() => {
    VendorList();
    },[]
  )

  const VendorList=()=>{
    const userData={

      "vendorid":'',
      "fullname":'',
      "type":'',
      "creationdate":'',
      "address":'',
      
      "city":'',
      "postalcode":'',
      "country":'',
      "phonenumber":'',
      "email":'',
      

    }

    axios.post('http://localhost:3002/getvendordata',userData)
      .then((response)=>{
        console.log(response.data)
        setVendorData(response.data)
      })
      .catch(
        (error)=>{
          console.log("The error loading data"+error)
        }
      )
  }

// const deleteCustomer=(custid)=>{
//   console.log(custid)
//   console.log("delete"+{_id:custid})
//   axios.delete('http://localhost:3002/deletecustomer/'+custid)
//   .then((res)=>{
//     console.log(res.status)
//     if(res.status==200){
//       alert("customer Successfully Deleted")
//       window.location.reload();
//     }
//     else{
//       alert("error")
//     }

//   }).catch((error)=>{
//     alert("something went wrong");
//   })
// }  

const editVendor=(id)=>{
  navigate("/updatevendor/"+id)
}


  return (
    <div>
        <div className="container inv_custdisp">
            <div className="row cust_disp">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">SlNo</th>
                                <th scope="col">Vendor Id</th>
                                <th scope="col">Full Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Creation Date</th>
                                <th scope="col">Address</th>
                                <th scope="col">City</th>
                                <th scope="col">Postal Code</th>
                                <th scope="col">Country</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Email</th>
      
                            </tr>
                        </thead>
                        <tbody>
                            {/* {Object.values(customerdata).map((value,index)=>( */}
                            {vendordata.map((value,index)=>(
                                <tr key={value._id}>
                                   <th scope="row">{index+1}</th>
                                   <td>{value.vendorid}</td>
                                     <td>{value.fullname}</td>
                                    <td>{value.type}</td>
                                    <td>{value.creationdate}</td>
                                    <td>{value.address}</td>
                                    <td>{value.city}</td> 
                                    <td>{value.postalcode}</td> 
                                    <td>{value.country}</td> 
                                    <td>{value.phonenumber}</td> 
                                    <td>{value.email}</td> 
                                    
                                    <td><button type="button" class="btn btn-primary" onClick={()=>editVendor(value._id)}>EDIT</button></td>
                                    {/* <td><button type="button" class="btn btn-primary" onClick={()=>deleteCustomer(value._id)}>DELETE</button></td> */}
                                </tr> 
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default DisplayVendors