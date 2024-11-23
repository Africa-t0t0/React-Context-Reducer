import { createContext } from "react";


// by using the () => {} we are indicating that it can receive a function.

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {}
});