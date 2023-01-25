import React, {useContext, createContext, useState} from 'react';

export const CartContext = createContext({});
function CartProvider({children}){
    const [itemsCart, setItemsCart] = useState([]);
    
    function HandleAddItem(newItem){
        setItemsCart(newItem)
        
        console.log(itemsCart)
        const indexItem = itemsCart.findIndex(item => item.id == newItem.id);
        console.log(indexItem)
        //setItemsCart(data)
        //console.log(JSON.stringify(itemsCart))
        
    }

    return(
        <CartContext.Provider value={{itemsCart, HandleAddItem}}>
            {children}
        </CartContext.Provider>)
}

export default CartProvider;