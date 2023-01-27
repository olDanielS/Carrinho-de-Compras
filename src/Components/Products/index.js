import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Products({ data, addToCart}) {

	return (
		<View style={Styles.Container}>
			<View style={Styles.Header}>
				<Text style={Styles.name}>{data.name}</Text>
				<Text style={Styles.price}>R$ {data.price.toFixed(2)}</Text>
			</View>

			<View style={Styles.AreaButton}>
				<TouchableOpacity style={Styles.btnArea} onPress={addToCart}>
					<Text style={Styles.btnText}>Adicionar</Text>
				</TouchableOpacity>
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
	name:{
		fontWeight: 'bold',
		fontSize:18,
	},
	price:{
		fontSize:18,
	},
	AreaButton: {
		alignItems: 'flex-end'
	},
	btnArea:{
		backgroundColor: '#fff',
		padding: 5,
		justifyContent: 'flex-end',
		width: 100,
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