import { useContext } from "react"
import MyContext from "../context/MyContext"

const Content = () => {

  const Product = useContext(MyContext).products
    
 return (
    <div className='card'>
       {Product.map(item=>(
        <>
          <h2>{item.name}</h2>
          <h2>{item.price}</h2>
          </>
       ))}
    </div>
  )
}

export default Content