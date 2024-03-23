import { useContext } from "react"
import MyContext from "../context/MyContext"

const Content = () => {

  const Product = useContext(MyContext)
    
 return (
    <div className='card'>
       {Product.products.map(item=>(
        <>
          <p key={item.id}>Producto: {item.name}</p>
          <p key={item.id}>Precio: {item.price}</p>
        </>
       ))}
    </div>
  )
}

export default Content