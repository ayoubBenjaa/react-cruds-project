import { createContext, useEffect, useMemo, useState } from 'react'
import Table from '../Table/Table'
import './Inputs.css'
import BtnDeleteAll from '../btnDeleteAll/BtnDeleteAll'


export const inputsContext = createContext(null)

const Inputs = () => {
    const [inpTitle, setInpTitle] = useState(null)
    const [inpPrice, setInpPrice] = useState(null)
    const [inpTaxes, setInpTaxes] = useState(null)
    const [inpAds, setInpAds] = useState(null)
    const [inpDiscount, setInpDiscount] = useState(null)
    const [total, setTotal] = useState(null)
    const [data_in_array, setData_in_array] = useState([])
    const [btnDeleteAll, setBtnDeleteAll] = useState('notActive')
    const [btnDelete, setBtnDelete] = useState('notActive')
    
    let saveData = []

    if(localStorage !== null){
        saveData = JSON.parse(localStorage.getItem('data'))
        useEffect(()=>{setData_in_array(saveData)},[])
    }

    useEffect(() => {
        inpPrice > 0
            ? setTotal(+inpPrice + +inpTaxes + +inpAds + -inpDiscount)
            : (setTotal(null))
    }, [inpPrice, inpTaxes, inpAds, inpDiscount])

    const readProduct = () => {
        const product = {
            title: inpTitle,
            price: inpPrice,
            taxes: inpTaxes,
            ads: inpAds,
            discount: inpDiscount,
            total: total,
        }
        setData_in_array([product, ...data_in_array])
        localStorage.setItem('data', JSON.stringify(data_in_array))
    }
    return (
        <>
            <inputsContext.Provider value={{ data_in_array, setData_in_array, btnDeleteAll, setBtnDeleteAll, }}>
                <BtnDeleteAll />
                <div className="row">
                    <input onInput={(e) => { setInpTitle(e.target.value) }} className="w-100" type="text" placeholder="Title" />
                </div>
                <div className="row my-1">
                    <input onInput={(e) => { setInpPrice(e.target.value) }} id="inpPrice" className="col  px-2 " type="number" placeholder="price" />
                    <input onInput={(e) => { setInpTaxes(e.target.value) }} id="inpTaxes" className="col  px-2" type="number" placeholder="taxes" />
                    <input onInput={(e) => { setInpAds(e.target.value) }} id="inpAds" className="col    px-2" type="number" placeholder="ads" />
                    <input onInput={(e) => { setInpDiscount(e.target.value) }} id="inpDiscount" className="col w-100 px-2" type="number" placeholder="discount" />
                    <div id="total" style={{ backgroundColor: inpPrice > 0 ? 'green' : 'crimson' }} className="col-2 text-center pt-1 text-light">{total}</div>
                </div>
                <div className="row">
                    <input id="inpCount" className="w-100" type="text" placeholder="Count" />
                </div>
                <div className="row">
                    <button id='BTN' onClick={readProduct} className="btn text-light btn-sm my-1 bg-info rounded-pill">Creat Product</button>
                </div>
                <div className="row">
                    <button id='BTN' onClick={() => { setBtnDeleteAll('active') }} className=" col btn text-light  btn-sm bg-danger rounded-pill">Delete All Product</button>
                </div>
                <div className="row">
                    <Table />
                </div>
            </inputsContext.Provider>

        </>
    )
}
export default Inputs



