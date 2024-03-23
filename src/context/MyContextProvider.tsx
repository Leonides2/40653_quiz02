import { useState } from "react";
import MyContext from "./MyContext";
import Product from "../quiz02/Product";

export interface IThemeProviderProps {
    children: React.ReactNode;
}  
  // Create a ThemeProvider component to provide the context value to child components
  export const MyProvider: React.FC<IThemeProviderProps> = ({ children }) => {
    let product: Product ={
       id: 0,
       name: '',
       price: 0,
       step: 0
    };


    const [products, setProducts] = useState(product)
    const [step, setStep] = useState(1)

    return (
      <MyContext.Provider value={{products, setProducts, step, setStep}} >
         {children}
      </MyContext.Provider>
    );
  };