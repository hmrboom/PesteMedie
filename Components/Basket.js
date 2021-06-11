import React, {useState} from 'react';
import {Image,Button, View, StyleSheet, Platform, Text, TouchableOpacity} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Unorderedlist from 'react-native-unordered-list';
const Basket = ({}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log("date->"+date);
        console.log("ce am ales->"+currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


    return (
        <View style={styles.container}>

<View style={styles.mere}>
                <Unorderedlist>
                    <Unorderedlist><Text>s1</Text></Unorderedlist>
                    <Unorderedlist><Text>s2</Text></Unorderedlist>
                    <Unorderedlist><Text>s3</Text></Unorderedlist>
                </Unorderedlist>
</View>

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
