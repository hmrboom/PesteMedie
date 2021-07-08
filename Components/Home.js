import React, {createContext, useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Searchbar} from 'react-native-paper';
import axios from "axios";
import icons from "../Consumables/icons";
import Restaurant from "./Restaurant";


const Home = ({navigation , route}) => {
    const [search, setSearch] = useState('');
    const onChangeSearch = query => setSearch(query);

    const [producatori, setProducator] = useState([]);

   function request() {
       axios.get('http://10.0.2.2:8080/getproducatoripaginated?page=1&size=15')
           .then(res => setProducator(res.data),
           )
   }
    useEffect(() => {
        request()
    }, [])

    const categories = [
        {
            id: 1,
            name: "Pizza",
            iconName: icons.pizza,
        },
        {
            id: 2,
            name: "Drink",
            iconName: icons.drink,
        },
        {
            id: 3,
            name: "Desert",
            iconName: icons.donut,
        },
        {
            id: 4,
            name: "Vegan",
            iconName: icons.vegan,
        }
    ];



    function mainCategory() {


        const renderItem = ({item}) => {


            return (
                <TouchableOpacity
                    style={styles.categori}
                >
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "white"
                        }}>
                        <Image
                            source={item.iconName}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />

                    </View>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{padding: 5}}>
                <Text style={{fontWeight: "bold", fontSize: 25}}>Category</Text>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingVertical: 10, marginBottom: 10}}

                />
            </View>
        )
    }

    function restaurant() {
        const renderItem = ({item}) => {

            return (
                <TouchableOpacity
                    style={styles.rest}
                    onPress={() => navigation.navigate('Restaurant',
                        {
                            item
                        },

                        )}
                >
                    <View>
                        <Image
                            source={{uri: "http://10.0.2.2:8080"+ item.poza}}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: 200,
                                borderRadius: 20,
                            }}
                        />

                    </View>
                    <View style={{alignItems: "center"}}>
                        <Text style={{fontSize: 25}}>{item.denumire}</Text>
                        <View style={{ flexDirection:"row" }}>{item.category.map(categ =>
                            {
                                return(
                                    <View key={categ.id}>
                                        <Text key={categ.id}>{categ.category} </Text>
                                    </View>
                                )
                            }
                        )}</View>
                        <View style={{flexDirection: "row"}}>
                            <Image
                                source={icons.starFull}
                                style={{
                                    height: 20,
                                    width: 20,
                                    marginRight: 10,
                                }}
                            />
                            <Text>{item.stars}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{padding: 30}}>
                <FlatList
                    ListHeaderComponent={mainCategory()}
                    data={producatori}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingHorizontal: 5, paddingBottom: 30}}

                />
            </View>
        )


    }


    return (

        <View style={styles.main}>
            <Searchbar
                style={styles.searchBar}
                placeholder="Type here..."
                onChangeText={onChangeSearch}
                value={search}
            />
            <SafeAreaView style={{flex:1 }}>
                {restaurant()}
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'lightskyblue',
        paddingTop: 40
    },
    topButoane: {
        top: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    searchBar: {
        borderRadius: 55,
    },
    listaProd:
        {
            justifyContent: 'space-between'
        },
    categori:
        {
            padding: 15,
            paddingBottom: 55,
            backgroundColor: "darksalmon",
            borderRadius: 55,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 35,
        },
    rest:
        {
            marginBottom: 10,
        }
});





export default Home;
