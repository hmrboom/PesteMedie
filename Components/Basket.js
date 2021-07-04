import React, {useState} from 'react';
import {Image,Button, View, StyleSheet, Platform, Text, TouchableOpacity} from "react-native";
import Unorderedlist from 'react-native-unordered-list';
import axios from "axios";
// this.state ={
//     nameList:[]
// }
//
//
// function componentDidMount() {
//     axios.get('http://localhost:8080/getproducatoripaginated?page=1&size=15')
//         .then(res =>{
//             const nameList = res.data;
//             this.setState({nameList})
//         })
// }

const Basket = ({}) => {


    return (
        <View style={styles.container}>


        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
    mere:{
        justifyContent:"center"

    }
});
export default Basket;
