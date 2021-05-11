import React from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
const Basket = ({}) => {
    var yourPicture = require ('../Images/pic_3_10.jpg');
    return (

        <View style={styles.main}>
            <Text>basket</Text>
            <Image style={styles.image} source={yourPicture}/>
        </View>
    );
};
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'lightskyblue',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
    },
    image:{
        width: 55,
        height: 55,
        borderRadius:550,
        // margin:5,
        // alignItems:'center',
        // justifyContent:'center',


    }
});
export default Basket;
