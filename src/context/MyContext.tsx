import React from "react";
import Product from "../quiz02/Product";



type MyContextData = {
    products: Product[],
    step: number,
    setStep: (step: number) => void
}

const MyContext = React.createContext<MyContextData>({
    products: [],
    step: 1,
    setStep: () => {},
});

export default MyContext;
