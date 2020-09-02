import React, {useState} from 'react'
import { StyleSheet, View, SafeAreaView, StatusBar, Image } from 'react-native';
import {Text, Item, Input, Button}from 'native-base';
import LogoApp from '../../assets/Ciao.png';

export default function Login(props) {
	console.log(props)
	const {setUserName}= props;
	const [name, setName]= useState("");
	const onSubmit =()=>{
		// console.log(name);
		setUserName(name);
	}
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle={'light-content'}/>
		<View>
			<Image source={LogoApp} resizeMode='contain' style={styles.logo}/>
		</View>
		<Item>
			<Input
			placeholder='Nombre de usuario'
			style={{color: '#fff'}}
			placeholderTextColor= 'grey'
			value={name}
			onChange={(e) => setName(e.nativeEvent.text)}
			/>	
		</Item>
		<Button style={styles.btnLogin} onPress={onSubmit}>
			<Text>Entrar</Text>
		</Button>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container:{
		marginHorizontal: 50,
		marginVertical:100,
	},
	logo:{
		width: '100%',
		height: 200,
		marginBottom:30,
	},
	btnLogin:{
		marginTop:40,
		justifyContent:'center',
		backgroundColor:'#5271ff',
		width:'100%'
	}
})
