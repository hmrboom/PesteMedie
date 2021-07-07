import React, {useState} from 'react';
import {Button, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import qs from 'qs';
import Profile from "./Profile";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const Login = ({navigation}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const yourPicture = require('../Images/pic_3_10.jpg');
    const [modalOpen, setModal] = useState(false);
    const [modalOpenFail, setModalFail] = useState(false);


    async function save(key, value) {
        console.log(key. value);
        await SecureStore.deleteItemAsync(key);
        await SecureStore.setItemAsync(key, value);
    }

    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            return result;
        } else {
            return null;
        }
    }



    function Request() {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic b3ZpZGl1czo=");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Access-Control-Allow-Origin", "localhost");


        var reqdata = {
            "username": email,
            "password": password,
            "grant_type": "password",
            "scope": "web"
        }

        let esc = encodeURIComponent;
        let query = Object.keys(reqdata).map(k => esc(k) + "=" + esc(reqdata[k])).join("&");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: query,
            redirect: 'follow',

        };



        fetch("http://10.0.2.2:8080/oauth/token", requestOptions)
            .then(response => {
                if (response.status === 200) {
                    setModal(true)

                }
                else {
                    setModalFail(true)
                }
                console.log(response.text().then(res=>{
                    save("token", JSON.parse(res)["access_token"])
                }))
            })
            .catch(error => console.log('error', error))


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
            {
                modalOpen &&

                <View style={styles.modal}>
                    <Modal
                        visible={modalOpen}
                        animation="slide"
                        transparent={true}
                    >
                        <View style={styles.modal}>
                            <View style={styles.modalView}>
                                <Text> Autentificat cu Succes! </Text>
                                <Button
                                    onPress={() => {
                                        setModal(false)
                                        navigation.navigate("Profile",

                                        )
                                    }
                                    }
                                    style={{borderRadius: 20,

                                    }}
                                    title="Ok"

                                />

                            </View>
                        </View>
                    </Modal>

                </View>

            }
            {
                modalOpenFail &&
                <View style={styles.modal}>
                    <Modal
                        visible={modalOpenFail}
                        animation="slide"
                        transparent={true}
                    >
                        <View style={styles.modal}>
                            <View style={styles.modalView}>
                                <Text> Email sau Parola gresita! </Text>
                                <Button
                                    onPress={() => {
                                        setModalFail(false)
                                    }
                                    }
                                    style={{borderRadius: 20,

                                    }}
                                    title="Ok"

                                />

                            </View>
                        </View>
                    </Modal>

                </View>
            }
        </View>
    )
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
        },
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width:"50%",
        height:"50%",
        marginLeft:100,
        marginTop: 150
    },
    modalView:{
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",

    }

});


export default Login;
