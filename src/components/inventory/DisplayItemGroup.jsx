import React from 'react'
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
const DisplayItemGroup = () => {
    var [itemgroup,setItemGroup]=useState([])
    var [id,setId] = useState();
    const navigate =useNavigate();
    
  
    useEffect(() => {
      displayItemGroup();
      },[]
    );
  
    const displayItemGroup=()=>{
      const userData={
  
        "itemname":'',
        "itemgroupname":'',
       
  
      }
  
      axios.post('http://localhost:3002/getitemgroupdata',userData)
        .then((response)=>{
          console.log(response.data)
          setItemGroup(response.data)
        })
        .catch(
          (error)=>{
            console.log("The error loading data"+error)
          }
        )
    }
  return (
    <div>
        <div className='linkitem' style={{textAlign:"center",color:"#1E90FF",marginTop:"4px",marginBottom:"4px"}}>
         <Link to="/additemgroups" >ADDITEMGROUP</Link>
        </div>
         <div className='container curriculumlist'>
        <div className="row curview">
        <h2 style={{textAlign:"center",color:"#1E90FF",marginTop:"4px",marginBottom:"4px"}}>ITEMGROUP LIST</h2> 
            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" >
              <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <table className="table table-success table-striped itemgrouptablelist" >
                    <thead>
                      <tr className="bg-dark text-white" class="bg-gray-50 currrow">
                      <th scope="col">SlNo</th>
                        <th scope="col">Item</th>
                        <th scope="col">ItemGroupName</th>
                       
                      </tr>
                    </thead>
                    <tbody class="itemgroupbody">
                      {Object.values(itemgroup).map((value,index)=>{
                         return <tr key={value._id}>
                            <th scope="row">{index+1}</th>
                           
                            <td>{value.itemname}</td>
                            <td>{value.itemgroupname}</td>
                            
                            {/* <td><button type="button" class="btn btn-primary" onClick={downloadCurriculum} >DOWNLOAD</button></td>
                            <td><button  type="button" class="btn btn-success" onClick={UpdateCurriculum}>APPROVE</button></td>
                            <td><button type="button" class="btn btn-danger" onClick={DeleteCurriculum}>REJECT</button></td> */}
                          </tr>
                       }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default DisplayItemGroup