import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView} from "react-native";
import * as SecureStore from "expo-secure-store";
import Login from "./Login";
import axios from "axios";
import icons from "../Consumables/icons";
import {RestaurantContext} from "./Restaurant";
import {useIsFocused} from "@react-navigation/native";

const Basket = ({navigation, route}) => {

     const ax =[];
    const isFocused = useIsFocused();
    const  products  = useContext(RestaurantContext);



    const [produse, setProduse] = useState([]);
    const [produs, setProdus] = useState([]);
    const [token, setToken] = useState('');

    function request() {
        async function save(key, value) {
            await SecureStore.setItemAsync(key, value);
        }

        getValueFor("token").then(e => {
            setToken(e)


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
                    console.log('error')
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
        if(isFocused){
            request()
            console.log('---')
        }
    }, [isFocused])

    function reqBuy()
    {
        axios.post('https://10.0.2.2:8080/buy',
            {
                produse: ax},{
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


   function rendItems()
   {

       const rendItem = ({item}) =>{
           ax.push(item.id)




               return (
                   <View>
                       <View style={styles.card}>
                           <View style={styles.continutCard}>
                               <View style={{marginVertical: 20, marginHorizontal: 20}}>
                                   <Image
                                       source={{uri: "http://10.0.2.2:8080" + item.path}}
                                       style={{width: 50, height: 50, resizeMode: 'contain'}}
                                   />
                               </View>
                               <View style={{marginHorizontal: 'auto', marginVertical: 10}}>
                                   <Text>
                                       {item.denumire} {'\n'}
                                       {item.descriere} {'\n'}
                                       {item.pret} lei
                                   </Text>

                               </View>
                               <View style={{marginLeft: 'auto', flexDirection: 'column', paddingVertical: 15}}>
                                   <TouchableOpacity>
                                       <Image
                                           style={{
                                               marginTop: "auto",
                                               marginRight: 15,
                                               width: 25,
                                               height: 25
                                           }}
                                           source={icons.minus}
                                       />
                                   </TouchableOpacity>
                                   <Text>
                                       Nr
                                   </Text>
                                   <TouchableOpacity>
                                       <Image
                                           source={icons.add}
                                           style={{width: 25, height: 25}}
                                       />
                                   </TouchableOpacity>

                               </View>

                           </View>
                       </View>

                   </View>

               )
       }

       return(
           <View>
               <FlatList
                   data={products}
                   renderItem={rendItem}
                   showsHorizontalScrollIndicator={false}
                   keyExtractor={item => `${item.id}`}
                   contentContainerStyle={{paddingVertical: 10, paddingBottom: 50}}
                   />
           </View>
       )


   }
   function check()
   {
       return(
           <View style={{
               justifyContent:'center',
               alignItems: 'center',

           }}>
               <TouchableOpacity
               style={{
                   backgroundColor:'rgba(4,64,33,0.7)',
                   paddingTop: 25,
                   paddingBottom:25,
                   borderRadius:15,
                   paddingLeft:75,
                   paddingRight:75
               }}
               onPress={()=>
               {
                   reqBuy()

               }

               }
               >
                   <Text style={{ fontSize:18 , fontWeight:'bold'}}> Proceed the CheckOut </Text>


               </TouchableOpacity>
           </View>


       )
   }

    return (
        <View style={styles.container}>

            {
                !SecureStore.isAvailableAsync('token') &&
                <TouchableOpacity
                    style={{top: "40%"}}
                    onPress={() => {
                        navigation.navigate('Login');
                    }
                    }
                >
                    <View style={styles.card}>
                        <View style={styles.cardContent}>
                            <Text style={{fontSize: 15}}> Nu sunteti logat, apasati aici pentru a merge pe pagina de
                                Login </Text>
                        </View>

                    </View>
                </TouchableOpacity>
            }

                    <View style={styles.titluCard}>
                        <View style={{marginVertical: 10,}}>
                            <Text style={{fontSize: 16}}> Your Basket </Text>
                        </View>
                    </View>
            <SafeAreaView>
                {rendItems()}
                {check()}
            </SafeAreaView>
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
        borderRadius: 10,
        elevation: 1,
        marginHorizontal: 15,
        backgroundColor:'rgba(0,39,40,0.37)',
        marginBottom:15
    },
    continutCard: {
        flexDirection: 'row',
        height: 100,


    },

    titluCard: {
        borderRadius: 10,
        elevation: 1,
        alignItems: 'center',
        marginHorizontal: 60,
        marginVertical: 10,
        backgroundColor: 'grey'
    },

    prodContent: {
        marginHorizontal: 18,
        marginVertical: 55,
    }

});
export default Basket;
