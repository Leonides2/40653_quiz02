import { useState } from "react";
import MyContext from "./MyContext";
import Product from "../quiz02/Product";

export interface IThemeProviderProps {
    children: React.ReactNode, 
    product: Product[];
}  
  // Create a ThemeProvider component to provide the context value to child components
  export const MyProvider: React.FC<IThemeProviderProps> = ({ children, product}) => {
 


    const [products, setProducts] = useState([])
    const [step, setStep] = useState(1)

    return (
      <MyContext.Provider value={{products, step, setStep}} >
         {children}
      </MyContext.Provider>
    );
  };