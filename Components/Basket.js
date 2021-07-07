import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as SecureStore from "expo-secure-store";
import Login from "./Login";
import axios from "axios";


const Basket = ({navigation , route}) => {

    const [produse, setProduse] = useState([]);
    const [produs, setProdus] = useState([]);
function request()
{
    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
    }

    getValueFor("token").then(e => {
        axios.get('http://10.0.2.2:8080/retrivePersonalData',
            {
                headers: {
                    "Authorization": "Bearer " + e
                }
            }
        )
            .then(result => {
                    setProduse(result.data)

                }
            )
            .catch(error =>
                console.log(error)
            )
    })

    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            return result;
        } else {
            return null;
        }
    }
}
    useEffect(() => {
        request()


    }, [])
    function renderProduse(){
        let {item} = route.params;
          const renderItem = ({item}) =>
        {
            return(
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <Text>item.</Text>
                    </View>
                </View>
            )
        }


        return(
            <View>
                <FlatList
                    data={item}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingVertical: 10, marginBottom: 10}}
                />
            </View>


        )


    }
    return (
        <View style={styles.container}>

            {
                !SecureStore.isAvailableAsync('token') &&
                  <TouchableOpacity
                  style={{ top:"40%" }}
                  onPress={() =>
                  {
                      navigation.navigate('Login');
                  }
                  }
                  >
                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Text style={{ fontSize:15 }}> Nu sunteti logat, apasati aici pentru a merge pe pagina de Login </Text>
                        </View>

                    </View>
                  </TouchableOpacity>
            }

            {
                SecureStore.isAvailableAsync('token') &&
                    <View>
                        <View style={styles.titluCard}>
                            <View style={{ marginVertical:10,  }}>
                                <Text style={{ fontSize:16 }}> Your Basket </Text>
                            </View>
                        </View>
                        <View style={styles.prodCard}>
                            <View style={styles.prodContent}>
                                <Text>da</Text>
                            </View>
                        </View>

                    </View>



            }
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: "lightskyblue"
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        marginHorizontal: 60,
        marginVertical: 6,



    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 18,
    },
    titluCard:{
        borderRadius: 10,
        elevation: 1,
        alignItems:'center',
        marginHorizontal:60,
        marginVertical:10,
        backgroundColor: 'grey'
    },
    prodCard:{
        borderRadius: 6,
        elevation: 1,
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        marginHorizontal: 15,
        marginVertical: 50,



    },
    prodContent:{
        marginHorizontal: 18,
        marginVertical: 40,
    }

});
export default Basket;
