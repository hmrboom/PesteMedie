import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import icons from "../Consumables/icons";
import produse from "../Consumables/produse";
import Basket from "./Basket";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const Restaurant = ({navigation, route}) => {
    const [restaurant, setRestaurant] = useState([]);
    const [token,setToken] = useState('');

    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            return result;
        } else {
            return null;
        }
    }
    getValueFor("token").then(e=> {

        setToken(e)
    })

    useEffect(() => {
        let {item} = route.params;
        setRestaurant(item);
    }, [])

    function test()
    {
        const renderItem = ({item}) => {


            return (
                <View>
                    <View style={styles.produseBorder}>

                        <View style={styles.produseStyle}>
                            <Image
                                source={{uri: "http://10.0.2.2:8080" + item.path}}
                                style={{
                                    width: "80%",
                                    height: "100%",
                                    resizeMode: "cover",
                                    borderRadius: 15,

                                }}
                            />
                        </View>

                        <View style={{
                            flexDirection: "column",
                            right: "30%",

                        }}>
                            {/*NUME PRODUS*/}
                            <Text>{item.denumire}</Text>
                            <Text>Pret:{item.pret} lei</Text>

                        </View>
                        <View style={{
                            marginLeft: "auto"

                        }}>
                            <TouchableOpacity
                                style={{
                                    marginTop: "auto",
                                    marginBottom: 10,
                                    marginRight: 10


                                }}
                                onPress={() => {

                                        axios.post('http://10.0.2.2:8080/buy',
                                            {

                                                produse: item.id,
                                                headers: {
                                                    "Authorization": "Bearer " + token,
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
                                    source={icons.add}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        resizeMode: "cover",


                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
        let {item} = route.params;
        const prod = item["produse"]

        return(
            <View style={{padding: 5}}>

                <FlatList
                    ListHeaderComponent={rendHeader()}
                    data={prod}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingVertical: 10, marginBottom: 10}}

                />
            </View>
        )
    }


    function rendHeader() {
        return (

            <View style={{marginBottom:10}}>
                <TouchableOpacity
                    style={styles.backIM}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        style={{
                            width: 25,
                            height: 40,
                            resizeMode: "contain",
                            marginLeft: 10,

                        }}
                    />
                </TouchableOpacity>
                <Image
                    source={{uri: "http://10.0.2.2:8080" + restaurant.poza}}
                    style={{
                        width: "100%",
                        height: 300,
                        resizeMode: "cover",
                    }}
                />

                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}>


                        <Text style={{fontSize: 25, fontWeight: "bold", paddingTop: "1%"}}>{restaurant.denumire}</Text>

                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={icons.starFull}
                            style={{
                                width: 20,
                                height: 20,
                                resizeMode: "contain"
                            }}
                        />
                        <Text style={{fontSize: 15,marginLeft:5}}>{restaurant.stars}</Text>
                   </View>
                </View>
            </View>


        );


    }


    return (
        <View style={styles.container}>

            <SafeAreaView style={{ flex: 1 }}>
                {test()}
            </SafeAreaView>

        </View>
    );
}
const styles = StyleSheet.create({
    container:
        {
            flex: 1,
            backgroundColor: "lightskyblue",
            paddingTop: 40,

        },
    backIM: {
        width: 40,

    },
    produseStyle: {
        width: "50%",
        height: "100%",
        borderRadius: 15
    },
    produseBorder: {

        width: "93%",
        height: 70,
        borderWidth: 1,
        top: 15,
        left: 22,
        borderRadius: 20,
        flexDirection: "row",
        marginBottom:15
    },
    restaurantP:
        {
            padding: 10
        }
});
export default Restaurant;
