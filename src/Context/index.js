import React, {useContext, createContext, useState} from 'react';

export const CartContext = createContext({});

function CartProvider({children}){
    const [cart, setCart] = useState([]);
    
    function handleAddItem(newItem){
       
        const indexItem = cart.findIndex(item => item.id === newItem.id);

        if(indexItem !== -1){
            let listProducts = cart;

            listProducts[indexItem].ammout = listProducts[indexItem].ammout + 1;
            listProducts[indexItem].total = listProducts[indexItem].ammout * listProducts[indexItem].price

            setCart(listProducts);
            return
        }
   
        let data = {
            ...newItem,
            ammout: 1,
            total: newItem.price
        }
        setCart(products => [...products, data])
    }

    function handleDecrease(newItem){
        const indexItem = cart.findIndex(item => item.id === newItem.id);

        if(cart[indexItem]?.ammout > 1){
            let listProducts = cart;

            listProducts[indexItem].ammout = listProducts[indexItem].ammout - 1;
            listProducts[indexItem].total = listProducts[indexItem].total - listProducts[indexItem].price

            setCart(listProducts);
            return
        }
        const removeItem = cart.filter(item => item.id !== newItem.id);
        setCart(removeItem)
    }
    

    return(
        <CartContext.Provider value={{cart, handleAddItem, handleDecrease}}>
            {children}
        </CartContext.Provider>)
}

export default CartProvider;