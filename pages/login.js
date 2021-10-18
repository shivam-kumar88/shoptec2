import React, { Component } from 'react'
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground
  } from 'react-native';
import { create } from 'react-test-renderer';
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import { Icon } from 'react-native-elements'


export default function login({ navigation }) {
    return (
        <View style={{flex:1, alignContent:'center', justifyContent:'center'}}>
        <ImageBackground source={{uri:'https://images.unsplash.com/photo-1614292264554-7dca1d6466d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}}style={styles.backgroundimage}>
        <View style={{justifyContent:'flex-start', alignContent:'flex-start'}}>
        <Image source={require('./components/logo/shoptec.jpg')} style={styles.logo}/>
        </View>
        <View style={styles.box}>
            <View style={{flexDirection:'row'}}>
                <TextInput style = {styles.input} placeholder = "Email"
                    onChangeText = {(Email) => ({Email})}/>
            </View>
            <View>
            <TextInput style = {styles.input} placeholder = "Password"
                secureTextEntry = {true}
                onChangeText = {(Password) => ({Password})}/>
            </View>
        <TouchableOpacity style = {styles.buttonContainer1} onPress = {() => navigation.navigate('products')}>
            <Text style={styles.text}>login</Text>
        </TouchableOpacity>
        <Text style={{color:'black', marginLeft:30}}>If you don't have account then register now</Text>
        </View>
        </ImageBackground>
    </View>
    )
}


const styles = StyleSheet.create({
    box:{
        width: 330,
        height: 310,
        backgroundColor:'white',
        borderRadius: 30,
        marginLeft:'8%',
        opacity: 0.8,
        marginTop: 20,
        alignContent:'center',
        justifyContent:'center'

    },
    logo:{
        width:100,
        height:80,
        padding:5,
        marginLeft:'37%',
        borderRadius:37
    },
    input: {
        height: 50,
        width: '75%',
        padding: 10,
        marginBottom: 20,
        marginLeft:'12%',
        borderBottomColor: 'black',
        borderBottomWidth:4
    },
    buttonContainer1: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:200,
        borderRadius:30,
        backgroundColor: "#45b1e8",
        marginLeft: '20%'
    },
    text:{
        color:'black'
    },
    backgroundimage: {
        flex: 1,
        justifyContent: "center"
      },
})