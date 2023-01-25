import Home, {useState} from "../pages/Home";
import Cart from "../pages/Cart";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Routers(){
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name="Cart" component={Cart}
                options={{
                    title: 'Carrinho'
                }}
            />
        </Stack.Navigator>
    )
}