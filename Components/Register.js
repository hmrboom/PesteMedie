import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image, Platform} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { RadioButton } from 'react-native-paper';
const Register = ({navigation}) => {
    const yourPicture = require('../Images/pic_3_10.jpg');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [dateString, setdateString] = useState('');
    const [checked,setChecked] = useState('M');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setdateString(String(currentDate.getDate()) +" "+ String(currentDate.getMonth()) +" "+ String(currentDate.getFullYear()));
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


    return (
        <View style={styles.main}>
            <Image style={styles.image} source={yourPicture}/>
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput
                        style={styles.text}
                        placeholder="Email"
                        placeholderColor="red"
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.text}
                        placeholder="Nume"
                        placeholderColor="red"
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.text}
                        placeholder="Prenume"
                        placeholderColor="red"
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.text}
                        placeholder="Password"
                        placeholderColor="red"
                    />
                </View>

                  <View style={styles.datePick}>


                    <Button onPress={showDatepicker} title="data nastere" color=""/>
                      <Text style={{left:20}}>--->{dateString}</Text>
                </View>
                {show && (
                    <RNDateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        display="default"
                        minimumDate={new Date(1951, 0, 1)}
                        maximumDate={new Date(2021,12,30)}
                        onChange={onChange}
                    />
                )}


                   <View style={styles.radioButon}>

                    <RadioButton
                       value="M"
                       status={ checked === 'F' ? 'checked' : 'unchecked'}
                       onPress={() => setChecked('F')}
                       color="blue"
                    />
                     <Text>Male</Text>
                    <RadioButton
                        value="F"
                        status={ checked === 'M' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('M')}
                        color="red"
                    />
                       <Text>Female</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.push('Login')}>
                    <Text>Do u have already acc?Login!</Text>
                </TouchableOpacity>
                <Button style={styles.registerBtn} title="Register" color="lightcoral"/>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'lightskyblue',
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        marginBottom: 40,
        width: 80,
        height: 80,
        borderRadius: 550,
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        backgroundColor: "lightcyan",
        borderRadius: 30,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        height: 45,
        flex: 1,
    },
    registerBtn:
        {
            width: "60%",
            borderRadius: 55,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            color: "mintcream",
        },
    datePick: {
         marginBottom: 20,
         alignItems:"center",
        flexDirection: 'row',

    },
    sexInput:{
         right:230
    },
    radioButon:{
        flexDirection: "row",
        alignItems:"center",

    }

});

export default Register;
