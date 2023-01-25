import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/Routers';
import CartProvider from './src/Context';

export default function App() {
 return (
   <NavigationContainer>
    <CartProvider>
      <Routers/>
    </CartProvider>
   </NavigationContainer>
  );
}