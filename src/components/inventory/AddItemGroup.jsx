import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const AddItemGroup = () => {
    const [itemgroup,setItemGroup]=useState({
        itemname:'',
        itemgroupname:''
    })

    const inputHandler=(event)=>{
        event.preventDefault();
        const {name,value}=event.target
        setItemGroup((previousState)=>({
            ...previousState,
            [name]:value
        }))
    }

    const addItemgroupData=async(e)=>{
        e.preventDefault();
        const res1=axios.post("http://localhost:3002/additemgroup",itemgroup)
          
              console.log(res1)
              if (res1.statusText==="OK") {
                alert("Items successfully Added");
              }
          }
    
  return (
    
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
         
         <div className='bg-white p-3 rounded w-50' >
             <form action=''>
               <div className='p-3 w-20'>
                 <h1>ADD ITEM Groups</h1>
               </div>
               <div className='mb-3'>
                  <label htmlFor='itemname'>Item Name</label>
                  <input type="text" placeholder='Enter Item Name' name="itemname" className='form-control rounded-0' onChange={inputHandler} value={itemgroup.itemname}/>
               </div>
               <div className='mb-3'>
                  <label htmlFor='itemgroupname'>ItemGroup Name</label>
                  <input type="text" placeholder='Enter itemgroup' name="itemgroupname" className='form-control rounded-0'onChange={inputHandler} value={itemgroup.itemgroupname}/>
               </div>
               
               
               
               
               
               <button type="button" className='btn btn-success' onClick={addItemgroupData}>Submit</button>
             </form>
         </div>
     </div>

  )
}

export default AddItemGroup