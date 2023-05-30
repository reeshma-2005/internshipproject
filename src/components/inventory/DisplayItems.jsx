import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

const DisplayItems = () => {

  const [item,setItem]=useState([])
  
  const navigate =useNavigate();
  

  useEffect(() => {
    itemList();
    },[]
  )

  const itemList=()=>{
    const userData={

      "itemname":'',
      "unit":'',
      "dimension":'',
      "weight":'',
      "mfacturer":'',
      
      "brand":'',
      "sprice":'',
      "cprice":'',
      "description":'',
      "ostock":'',
      "reorderpoint":'',
      "pvendor":'',
      "photo":''


    }

    axios.post('http://localhost:3002/getitemdata',userData)
      .then((response)=>{
        console.log(response.data)
        setItem(response.data)
      })
      .catch(
        (error)=>{
          console.log("The error loading data"+error)
        }
      )
  }


  return (
    <div>
        <div className="container inv_itemdisp">
            <div className="row item_disp">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">SlNo</th>
                                <th scope="col">ItemName</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Dimension</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Manufacturer</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Selling Price</th>
                                <th scope="col">Cost Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">Opening Stock</th>
                                <th scope="col">ReorderPoint</th>
                                <th scope="col">Preferred Vendor </th>
                                <th scope="col">Item Image</th>
      
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(item).map((value,index)=>(
                                <tr key={value._id}>
                                   <th scope="row">{index+1}</th>
                                   <td>{value.itemname}</td>
                                   <td>{value.unit}</td>
                                   <td>{value.dimension}</td>
                                   <td>{value.weight}</td>
                                   <td>{value.mfacturer}</td>
                                   <td>{value.brand}</td>
                                   <td>{value.sprice}</td>
                                   <td>{value.cprice}</td>
                                   <td>{value.description}</td>
                                   <td>{value.ostock}</td>
                                   <td>{value.reorderpoint}</td>
                                   <td>{value.pvendor}</td>
                                   <td><img width='100px' src={`http://localhost:3002/${value.photo}`}></img></td>
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

export default DisplayItems