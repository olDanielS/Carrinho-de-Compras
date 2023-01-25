import React, { useState, useContext} from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Products from '../../Components/Products';
import Feater from 'react-native-vector-icons/Feather';
import { CartContext } from '../../Context';

export default function Home() {
	const {itemsCart, HandleAddItem} = useContext(CartContext)
	const navigation = useNavigation();
	
	const [products, setProducts] = useState([
		{ id: 1, name: 'Feijão', price: 5.90 },
		{ id: 2, name: 'Arroz', price: 3.50 },
		{ id: 3, name: 'Macarrão', price: 2.90 },
		{ id: 4, name: 'Sal', price: 1.00 },
		{ id: 5, name: 'Molho de tomate', price: 4.30 },
		{ id: 6, name: 'Extrato de tomate', price: 4.50 },
		{ id: 7, name: 'Batata', price: 5.20 },
		{ id: 8, name: 'Abobora', price: 5.30 },
	])

	function addItemCart(item){
		HandleAddItem(item)
	}
	return (
		<View>
			<View style={styles.header}>
				<Text style={styles.title}>Lista de Produtos</Text>

				<TouchableOpacity style={styles.pointer} onPress={() => navigation.navigate('Cart')}>
						<Feater name='shopping-cart' size={30} color="red"/>
						<Text style={styles.txtPointer}>{itemsCart?.length}</Text>
				</TouchableOpacity>
			</View>
			<FlatList
				data={products}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Products data={item} addToCart={() => addItemCart(item)}/>}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		marginTop: 45,
		marginBottom: 15,
		padding:10,
		justifyContent:'space-between',
		flexDirection: 'row',
		position: 'relative'
	},
	title: {
		fontSize: 20
	},
	pointer: {
		position: 'absolute',
		right: 1,
		marginRight: 10

	},
	txtPointer:{
		top: -7,
		width: 25,
		backgroundColor: 'red',
		fontSize: 18,
		borderRadius: 15,
		textAlign: 'center',
		color: '#FFF'
		
	}
})