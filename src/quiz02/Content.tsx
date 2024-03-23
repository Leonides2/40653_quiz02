import { useContext } from "react"
import MyContext from "../context/MyContext"

const Content = () => {

  const Product = useContext(MyContext)
    
 return (
    <div className='card'>
       {Product.products.map(item=>(
        <>
          <h2 key={item.id}>{item.name}</h2>
          <h2 key={item.id}>{item.price}</h2>
          </>
       ))}
    </div>
  )
}

export default Content