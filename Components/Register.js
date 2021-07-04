import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Image} from "react-native";
import {RadioButton} from 'react-native-paper';
import axios from "axios";

const Register = ({navigation}) => {
    const yourPicture = require('../Images/pic_3_10.jpg');
    const [checked, setChecked] = useState('M');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [prenume, setPrenume] = useState('');
    const [nume, setNume] = useState('');

    function Request() {
        axios.post('http://10.0.2.2:8080/register',
            {
                email: email,
                password: password,
                nume: nume,
                prenume: prenume,
                sex: checked

            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <View style={styles.main}>
            <Image style={styles.image} source={yourPicture}/>
            <View style={styles.container}>
                <View style={styles.input}>
                    <TextInput
                        style={styles.text}
                        placeholder="Email"
                        placeholderColor="red"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.text}
                        placeholder="Nume"
                        placeholderColor="red"
                        onChangeText={(nume) => setNume(nume)}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.text}
                        placeholder="Prenume"
                        placeholderColor="red"
                        onChangeText={(prenume) => setPrenume(prenume)}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        style={styles.text}
                        placeholder="Password"
                        placeholderColor="red"
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>


                <View style={styles.radioButon}>
                    <RadioButton
                        value="M"
                        status={checked === 'M' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('M')}
                        color="blue"
                    />
                    <Text style={{marginRight: 100}}>Male</Text>

                    <RadioButton
                        value="F"
                        status={checked === 'F' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('F')}
                        color="red"
                    />
                    <Text>Female</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.push('Login')}>
                    <Text style={{marginBottom: 10}}>Do u have already acc?Login!</Text>
                </TouchableOpacity>
                <Button style={styles.registerBtn} title="Register" color="lightcoral" onPress={()=>{
                    axios.post('http://10.0.2.2:8080/register',
                        {
                            email: email,
                            password: password,
                            nume: nume,
                            prenume: prenume,
                            sex: checked

                        })
                        .then(response => {
                            console.log(response);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                    navigation.navigate('Login');
                }}/>

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
        alignItems: "center",
        flexDirection: 'row',

    },
    sexInput: {
        right: 230
    },
    radioButon: {
        flexDirection: "row",
        alignItems: "center",


    }

});

export default Register;
