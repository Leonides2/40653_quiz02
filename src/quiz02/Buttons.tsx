import { useContext } from "react"
import MyContext from "../context/MyContext"


const Buttons= () =>{
    const Products = useContext(MyContext)

 return(

    <div className='flex'>
        <button type="button" onClick={()=>Products.setStep(Products.step-1)}>Prev</button>
        <button type="button" onClick={()=>Products.setStep(Products.step+1)}>Next</button>
      </div>
 )   
}

export default Buttons