import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import axios from "axios";


const Login = ({navigation}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const yourPicture = require('../Images/pic_3_10.jpg');

    function Request() {
        axios.post('http://10.0.2.2:8080/oauth/token',
            {
                body : new URLSearchParams({
                    'username' : 'Vilcuiustin3@gmail.com',
                    'password' : '1234',
                    'grant_type' : 'password'
                })

            },
        {
            headers:{
                'Authorization': 'Basic b3ZpZGl1czo='
            }
        }
            )

            // Vilcuiustin3@gmail.com
            //  new Buffer('ovidius:').toString('base64')

            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });

    }


    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Image style={styles.image} source={yourPicture}/>
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
                        placeholder="Password"
                        placeholderColor="red"
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot_button}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push('Register')}
                >
                    <Text style={styles.register_button}>Don't have an account?Register!</Text>
                </TouchableOpacity>
                <Button style={styles.loginBtn} title="LOGIN" color="lightcoral" onPress={Request}/>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'lightskyblue',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red',
    },
    image: {
        marginBottom: 40,
        width: 80,
        height: 80,
        borderRadius: 550,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 80
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
    text1: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        marginRight: 157,
    },
    forgot_button: {
        height: 30,
        marginBottom: 1,
    },
    register_button: {
        height: 40,
        marginBottom: 0,
        marginTop: 10
    },
    loginBtn:
        {
            width: "60%",
            borderRadius: 55,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            color: "mintcream",
        }
});


export default Login;
