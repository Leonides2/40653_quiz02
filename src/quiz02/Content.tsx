import { useContext } from "react"
import MyContext from "../context/MyContext"

const Content = () => {

  const Product = useContext(MyContext)
 const desireProduct = Product.products.filter(item => item.step  === Product.step)
  
    
 return (
    <div className='card'>

       {desireProduct.map(item =>
        <>
          <p key={item.id}>Producto: {item.name}</p>
          <p key={item.id}>Precio: {item.price}</p>
        </>
       )
       }
    </div>
  )
}

export default Content