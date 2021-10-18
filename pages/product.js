import React, { Component } from 'react'
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableOpacity,
    FlatList
  } from 'react-native';
  import CounterInput from "react-native-counter-input";
  //import { SearchBar } from 'react-native-elements';
  import SearchBar from "react-native-dynamic-search-bar";
  import { Icon } from 'react-native-elements'

export class product extends Component {
    render() {
        return (
            <ScrollView>
            <View style={styles.view}>
                <View style={{flexDirection:'row'}}>
                    
                    <Image source={require('./components/logo/shoptec.jpg')} style={styles.logo}/>

                </View>
                <SearchBar
                    style={{margin:5, width:380, }}
                    placeholder="Search here"
                    onPress={() => alert("onPress")}
                    onChangeText={(text) => console.log(text)}
                    />
                <View style={styles.productcard}>
                    <View>
                        <Image source={require('./components/images/ipad.png')} style={styles.productimage}/>
                        <View style={{flexDirection:'row', margin:10}}>
                            <TouchableOpacity style={styles.counterbutton}>
                                <Text style={styles.countertext}>+</Text>
                            </TouchableOpacity>
                            <Text style={{margin:10, color:'black', fontSize:15, marginTop:5}}>1</Text>
                            <TouchableOpacity style={styles.counterbutton}>
                                <Text style={styles.countertext}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginLeft:20, margin:10}}>
                        <Text style={styles.name}>Ipad mini (2021)</Text>
                        <Text style={styles.description}>Ipad black colour 128gb</Text>
                        <Text style={styles.price} >$600</Text>
                        <Text style={styles.stock}>In stock</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.deletebutton}>
                                <Text style={styles.name}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.detailbutton}>
                                <Text style={styles.name}>Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.productcard}>
                    <View>
                        <Image source={require('./components/images/dellxps.webp')} style={styles.productimage}/>
                        <View style={{flexDirection:'row', margin:10}}>
                            <TouchableOpacity style={styles.counterbutton}>
                                <Text style={styles.countertext}>+</Text>
                            </TouchableOpacity>
                            <Text style={{margin:10, color:'black', fontSize:15, marginTop:5}}>1</Text>
                            <TouchableOpacity style={styles.counterbutton}>
                                <Text style={styles.countertext}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginLeft:20, margin:10}}>
                        <Text style={styles.name}>Dell xps 13(2020)</Text>
                        <Text style={styles.description}>Ipad black colour 64gb</Text>
                        <Text style={styles.price} >$1000</Text>
                        <Text style={styles.stock}>In stock</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.deletebutton}>
                                <Text style={styles.name}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.detailbutton}>
                                <Text style={styles.name}>Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.productcard}>
                    <View>
                        <Image source={require('./components/images/iphone.webp')} style={styles.productimage}/>
                        <View style={{flexDirection:'row', margin:10}}>
                            <TouchableOpacity style={styles.counterbutton}>
                                <Text style={styles.countertext}>+</Text>
                            </TouchableOpacity>
                            <Text style={{margin:10, color:'black', fontSize:15, marginTop:5}}>1</Text>
                            <TouchableOpacity style={styles.counterbutton}>
                                <Text style={styles.countertext}>-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginLeft:20, margin:10}}>
                        <Text style={styles.name}>Iphone 13(2021)</Text>
                        <Text style={styles.description}>Ipad black colour 64gb</Text>
                        <Text style={styles.price} >$700</Text>
                        <Text style={styles.stock}>In stock</Text>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.deletebutton}>
                                <Text style={styles.name}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.detailbutton}>
                                <Text style={styles.name}>Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={styles.subtotaltext}>Subtotal $2300</Text>
                <TouchableOpacity style={styles.proceedbutton}>
                    <Text style={styles.description}>Proceed to buy(3 items)</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
}

export default product

const styles = StyleSheet.create({
    view:{
        flex:1,
        flexDirection:'column',
        alignContent:'space-between',
        justifyContent:'space-between',
        alignItems: 'center'
        
    },
    logo:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:'85%',
        margin:5
    },
    productcard:{
        flexDirection:'row',
        height:200,
        width:370,
        backgroundColor:'white',
        padding:10,
        marginBottom:10
    },
    productimage:{
        width:120,
        height:140
    },
    counterbutton:{
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:'white',
        alignContent:'center',
        justifyContent:'center',
        margin:5
    },
    countertext:{
        fontWeight:'bold',
        marginLeft:5,
        fontSize:20,
        marginTop:-5,
        color:'black'
    },
    description: {
        fontSize: 15,
        color: 'black'
    },
    stock: {
        fontSize: 13,
        color: '#5cfa58',
        marginTop:-20,
        marginBottom:10
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 30,
        fontSize:25
    },
    deletebutton:{
        height:40,
        width:100,
        borderWidth:5,
        borderColor:'#2acaea',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    detailbutton:{
        height:40,
        width:100,
        backgroundColor:'#2acaea',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    subtotaltext:{
        fontWeight:'bold',
        fontSize:25,
        color:'black',
        fontStyle: 'italic'
    },
    proceedbutton:{
        height:50,
        width:300,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:35,
        backgroundColor:'#2acaea',
        marginBottom:10

    }
})