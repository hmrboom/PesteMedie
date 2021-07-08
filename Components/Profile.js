import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, SafeAreaView, TouchableOpacity, FlatList, ScrollView} from "react-native";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import icons from "../Consumables/icons";


function Profile({navigation}) {
    const [data, setData] = useState([]);
    const [token, setToken] = useState('');

    async function save(key, value) {
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

    function request() {

        getValueFor("token").then(e => {

            setToken(e);
            axios.get('http://10.0.2.2:8080/retrivePersonalData',
                {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }
            )
                .then(result => {
                        setData(result.data)
                        console.log("-----------")
                    }
                )
                .catch(error =>
                    console.log(error)
                )


        })

    }

    useEffect(() => {
        request()


    }, [])


    function rendHeader() {
        return (

            <View style={{ justifyContent:'center' }}>
                <View>
                    <View style={{ flexDirection:'column',alignItems:'center' }}>
                        <Image
                            source={{uri: "http://10.0.2.2:8080" + data.path}}
                            style={{ width:200,height:200,borderRadius:15 }}
                        />
                        <Text style={{fontSize:28}}>{data.nume} {data.prenume}</Text>
                        <TouchableOpacity>
                            <Text>Change Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                SecureStore.deleteItemAsync("token");
                                navigation.navigate("Login")
                            }}
                            style={{ flexDirection:'row',marginTop:5 }}
                        >
                            <Text>Logout </Text>
                            <Image source={icons.logout} style={{ width:20,height:20 }}/>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>


        )

    }

    function lastPurch() {

        return data.lastPurchases.map(e => {
                return (
                    <View key={e?.id} style={styles.card}>
                        <View style={styles.cardContent}>
                            <View>
                                <Text>Comanda cu Numarul:{e?.id} {'\n'}
                                    La data de: {'\n'}{e?.date}
                                </Text>
                            </View>
                            <View style={{left: 10}}>
                                <Text>
                                    Pret Total {'\n'}
                                    {e?.price} lei
                                </Text>
                            </View>
                            <View style={{justifyContent: 'center', left: 20, marginTop: 10}}>
                                <TouchableOpacity
                                    onPress={() => {
                                        let buy = [];
                                        e?.products.map(item => {
                                            buy.push(item?.id)
                                        })
                                        axios.post('https://10.0.2.2:8080/buy',
                                            {
                                                produse: buy
                                            }, {
                                                headers: {
                                                    Authorization: "Bearer " + token,
                                                    "Content-Type": "application/json"
                                                }
                                            })
                                            .then(e => {
                                                console.log('a mers')
                                            })
                                            .catch(error => console.log(error))
                                    }

                                    }
                                >
                                    <Image
                                        source={icons.plus}
                                        style={{width: 30, height: 30}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                )
            }
        )


    }

    return (

        <View style={styles.container}>

            <ScrollView style={{flex: 1, marginBottom: 15}}>
                {rendHeader()}

                {lastPurch()}
            </ScrollView>


        </View>


    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightskyblue",
        paddingTop: 40
    },
    card: {
        borderRadius: 6,
        elevation: 1,
        marginHorizontal: 20,
        marginVertical: 5,
        backgroundColor: 'rgba(0,39,40,0.37)',
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        flexDirection: 'row'

    },
    produseBorder: {
        width: "93%",
        height: 70,
        borderWidth: 1,
        top: 15,
        left: 22,
        borderRadius: 20,
        flexDirection: "row",
        marginBottom: 15
    },
    produseStyle: {
        width: "50%",
        height: "100%",
        borderRadius: 15
    }


})
export default Profile;
