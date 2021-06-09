import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import {forEach} from "react-bootstrap/ElementChildren";

const Home = ({navigation}) => {
    return (
        <View style={styles.main}>
        <Button
        onPress={()=> navigation.navigate('Profile')}
        title="Home frate"
        />
        <Button onPress={Request} title="ceva"/>
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
});
function Request()
{
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {

        }
        );

}
export default Home;
