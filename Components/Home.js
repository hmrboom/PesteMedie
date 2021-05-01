import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

const Home = ({navigation}) => {
    return (
        <View style={styles.main}>
        <Button
        onPress={()=> navigation.navigate('Profile')}
        title="Home frate"
        />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
    },
});
export default Home;
