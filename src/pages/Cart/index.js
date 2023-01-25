import React, {useContext, useState} from 'react';
import { View, Text, FlatList} from 'react-native';
import { CartContext } from '../../Context';
import CartItems from '../../Components/CartItems';

export default function Cart() {

  const {itemsCart} = useContext(CartContext)

 return (
   <View>
    <FlatList
      data={itemsCart}
      keyExtractor={(item) =>  item.id}
      renderItem={({item}) => <CartItems data={item}/>}
    />
   </View>
  );
}