
import './App.css'
import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'
import { MyProvider } from './context/MyContextProvider'
import Buttons from './quiz02/Buttons';
import Product from './quiz02/Product';

function App() {

  let products: Product[] =[
    { id:1, step:1, name: 'Mouse', price: 60 },
    { id:2, step:1, name: 'Monitor', price: 70 },
    { id:4, step:2, name: 'Keyboard', price: 80 },
    { id:5, step:2, name: 'Headset', price: 90 },
    { id:6, step:3, name: 'Tablet', price: 100 },
    { id:7, step:3, name: 'Hub', price: 110 }
  ];
  
  return (
    <>
      <h1>Quiz 02</h1>
      <MyProvider product={products}>
       <Stepper/>

       <Content/>

       <Buttons/>
      </MyProvider>
      
    </>
  )
}

export default App
