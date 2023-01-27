import React, {useContext, useState} from 'react';
import { View, Text, FlatList} from 'react-native';
import { CartContext } from '../../Context';
import CartItems from '../../Components/CartItems';

export default function Cart() {
  const {cart, handleAddItem, handleDecrease} = useContext(CartContext)
  
 return (
   <View>
    <FlatList
      data={cart}
      keyExtractor={(item) =>  item.id}
      ListEmptyComponent={() => <Text>Ainda sem produtos no carrinho.</Text>}
      renderItem={({item}) => <CartItems data={item}
      addAmmout={() => handleAddItem(item)}
      removeAmmout={() => handleDecrease(item)}
      />}
    />
   </View>
  );
}