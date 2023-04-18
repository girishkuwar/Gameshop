import { useState } from "react";
import cartContext from "./CartContext";

const Cartstate = (props) => {
    const [cart, setCart] = useState([]);
    const update = () => {
        setCart(JSON.parse(localStorage.getItem('cart')));
    }
    const EmptyCart = () => {
        localStorage.removeItem("cart");
        setCart([]);
    }
    return (
        <cartContext.Provider value={{ cart, update, EmptyCart }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default Cartstate;
