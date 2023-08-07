import React, { useContext, useEffect } from 'react'
import { inputsContext } from '../Inputs/Inputs'


const Table = () => {

  const {data_in_array,setData_in_array} = useContext(inputsContext)
    return (
      <table className='table text-center  text-light'>
        <thead >
          <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>TAXES</th>
              <th>ADS</th>
              <th>DISCOUNT</th>
              <th>TOTAL</th>
              <th>UPDATE</th>
              <th>DELETE</th>
          </tr>
        </thead>
      <tbody className='table-group-divider '>
        {data_in_array?.map((pro,index)=>(
            <tr key={index}>{
              <>
                <td>{index+1}</td>
                <td>{pro.title}</td>
                <td>{pro.price}</td>
                <td>{pro.taxes}</td>
                <td>{pro.ads}</td>
                <td>{pro.discount}</td>
                <td>{pro.total}</td>
                <td><button className='btn text-light border border-3 border-info btn-sm btn-outline-info'>Update</button></td>
                <td><button className='btn text-light border border-3 border-danger btn-sm btn-outline-danger'>Delete</button></td>
              </>
            }</tr>
          ))}  
          
        </tbody>
      </table>
    )
}

export default Table
