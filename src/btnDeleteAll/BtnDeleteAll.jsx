import React, {useContext} from 'react'
import img from '../Assets/undraw_Throw_away_re_x60k.png'
import { inputsContext } from '../Inputs/Inputs'
import './BtnDeleteAll.css'


const BtnDeleteAll = () => {

    const {btnDeleteAll, setBtnDeleteAll,data_in_array,setData_in_array} = useContext(inputsContext)

    const clearLocalStrage = ()=>{
        localStorage.clear()
        setBtnDeleteAll('notActive')
        setData_in_array(null)
        
        
    }


  return (
    <div id={btnDeleteAll} className=' w-25 text-center bg-warning border border-3 card'>
        <img className='w-100 mb-1' src={img} alt="" />
        <h5>Be CarFull !</h5>
        <p>Your going to delete All Products</p>
        <div  className='d-flex justify-content-around py-2'>
            <button onClick={clearLocalStrage} className='btn border border-3 btn-outline-danger  border-danger text-light'>Continue</button>
            <button onClick={()=>{setBtnDeleteAll('notActive')}} className='btn border border-3 btn-outline-info border-info text-light'>Cancel</button>
        </div>
    </div>
  )
}

export default BtnDeleteAll
