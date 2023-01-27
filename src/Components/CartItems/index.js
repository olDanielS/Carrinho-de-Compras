import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../../Context';

export default function CartItems({data, addAmmout, removeAmmout}) {

	const [ammout, setAmmout] = useState(data?.ammout);

	function incrementItem(){
		setAmmout(item => item + 1)
		addAmmout();
	}
	function decrementeItem(){
		setAmmout(item => item - 1)
		removeAmmout()
	}

	return (
		<View style={Styles.Container}>
			<View style={Styles.Header}>
				<Text style={Styles.name}>{data.name}</Text>
				<Text style={Styles.price}>R$ {data.price.toFixed(2)}</Text>

			</View>

			<View style={Styles.body}>
				<View>
					<Text style={Styles.titleTotal}> Total: </Text>
					<Text style={Styles.total}> R$ {data.total.toFixed(2)}</Text>
				</View>
				
				<View style={Styles.AreaButton}>
					<TouchableOpacity style={Styles.btnArea} onPress={decrementeItem}>
						<Text style={Styles.btnText}>-</Text>
					</TouchableOpacity>

					<Text style={Styles.ammout}> {ammout} </Text>

					<TouchableOpacity style={Styles.btnArea} onPress={incrementItem}>
						<Text style={Styles.btnText}>+</Text>
					</TouchableOpacity>
				</View>
		</View>
		</View>
	);
}

const Styles = StyleSheet.create({
	Container: {
		flex: 1,
		justifyContent:'flex-end',
		backgroundColor: '#fafafa',
		marginBottom: 20,
		marginTop: 10,
		padding:10,
		marginLeft: 10,
		marginRight: 10,
		borderBottomWidth: 0.4,
		borderBottomColor: '#808080',
		borderTopWidth: 0.4,
		borderTopColor: '#808080',
		position: 'relative',
		
	},
	Header:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10
	},
	body: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	name:{
		fontWeight: 'bold',
		fontSize:18,
	},
	price:{
		fontSize:18,
	},
	AreaButton: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent:'flex-end'
	},
	ammout:{
		fontSize: 20,
		marginHorizontal: 10
	},
	titleTotal: {
		fontSize: 16
	},
	total: {
		fontWeight: '500',
		fontSize: 18
	},
	btnArea:{
		backgroundColor: '#fff',
		padding: 5,
		justifyContent: 'flex-end',
		width: 50,
		borderRadius: 10,
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'red'	
	},
	btnText: {
		fontSize: 16,
		color: 'red',
		fontWeight: '500'
	}
})