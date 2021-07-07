import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, SafeAreaView, TouchableOpacity, FlatList} from "react-native";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import icons from "../Consumables/icons";
import useLayoutEffect from "react-native-web/dist/hooks/useLayoutEffect";

function Profile() {
    const [data, setData] = useState([]);
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

        getValueFor("token").then(e=>{

            let token = e;
            axios.get('http://10.0.2.2:8080/retrivePersonalData',
                {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                }
            )
                .then(result => {
                        let cv
                        cv = result.data

                        setData(cv)


                        console.log("-----------")
                    }
                )
                .catch(error =>
                    console.error(error)

                )


        })

    }
    useEffect(() => {
        request()
    }, [])


    function lastPurch()
    {
           const renderItem = ({item}) =>
           {

               return(

                       <View style={styles.card}>
                           <View style={styles.cardContent}>
                               <Text>s</Text>
                           </View>


                       </View>


               )

           }


        return(
            <View>
                <FlatList
                    ListHeaderComponent={renderItem}
                    data={data.lastPurchases}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    />
            </View>

        )



    }

    return (
        <View style={styles.container}>

                <View style={{flexDirection: "column", alignItems: "center"}}>


                        <Image
                            source={{uri:"http://10.0.2.2:8080" +data?.path}}
                            style={{
                                width: "50%",
                                height: "45%",
                                resizeMode: "contain",
                                borderRadius: 200
                            }}
                        />

                    <Text style={{ fontSize:25 }}>
                        {data?.nume} {data?.prenume}
                    </Text>
                    <TouchableOpacity
                        style={{marginTop: 5}}
                    >

                        <Text> Change Photo </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{marginTop: 5}}
                    >

                        <Text> Logout </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "column",bottom:100,padding:10 }}>

                    <Text style={{ fontSize:20 }}>
                        Email: {data?.email}   {"\n"}
                        Sex: {data?.sex}  {"\n"}
                    </Text>
                    {/*{*/}
                    {/*    data.role.role === 'ROLE_ADMIN' &&*/}
                    {/*    <Text style={{ fontSize:20, bottom:26,right:5}}> Rolul de: Admin </Text>*/}
                    {/*}*/}
                    {/*{*/}
                    {/*    data.role.role !== 'ROLE_ADMIN' &&*/}
                    {/*    <Text style={{ fontSize:20,bottom:26,right:5 }}> Rolul de: Membru </Text>*/}
                    {/*}*/}
                    {lastPurch()}


                </View>
            </View>


    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightskyblue",
        paddingTop: 40
    },
    card:{
        borderRadius:6,
        elevation:3,
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.3,
        marginHorizontal:10,
        marginVertical:6
    },
    cardContent:{
        marginHorizontal: 18,
        marginVertical: 18

    }


})
export default Profile;
