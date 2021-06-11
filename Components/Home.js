import React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import axios from "axios";
import {StatusBar} from "expo-status-bar";
const Home = () => {

    return (
        <View style={styles.main}>
            <View style={styles.topButoane}>

                <TouchableOpacity><Text>UNU</Text></TouchableOpacity>
                <TouchableOpacity><Text>UNU</Text></TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.searchButon} source={require('../Images/maxresdefault.jpg')}/>

                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'lightskyblue',
        paddingTop: 15
    },
    topButoane: {
        top:10,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    searchButon:{
        maxWidth:"35%",
        maxHeight:"5%",
        left:"65%",
        borderRadius: 70,
    }
});

function Request() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {

            }
        );

}

export default Home;
