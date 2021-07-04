import React, {useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import icons from "../Consumables/icons";
import produse from "../Consumables/produse";

const Restaurant = ({navigation, route}) => {
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
            let {item} = route.params;
            setRestaurant(item);
        }
    )

    function rendRestaurant() {
        return (
            <View style={styles.restaurantP}>
                <Image
                    source={restaurant?.poza}
                    style={{
                        width:"100%",
                        height: 300,
                        resizeMode:"cover",
                        borderRadius: 35
                    }}
                    />
                <View style={{
                    flexDirection: "row",
                    padding:10


                }}>
                    <Image
                        source={icons.starFull}
                        style={{
                            width:20,
                            height:20,
                            resizeMode:"contain"
                        }}
                        />
                    <Text style={{fontSize:15}}>{restaurant?.rating}</Text>
                </View>

            </View>


        );
    }

    function rendProdus() {

      const renderItem = ({item}) => {


          return (
              <View>
                  <View style={styles.produseBorder}>

                      <View style={styles.produseStyle}>
                          <Image
                              source={produse.paste}
                              style={{
                                  width: "100%",
                                  height: "100%",
                                  resizeMode: "cover",
                                  borderRadius: 15,

                              }}
                          />
                      </View>

                      <View style={{
                          flexDirection: "column",
                          left: "25%"
                      }}>
                          {/*NUME PRODUS*/}
                          <Text style={{fontSize: 28}}>Titule</Text>
                          <Text style={{fontSize: 15}}>descriere</Text>

                      </View>
                      <View style={{
                          flexDirection: "column",
                          left: "50%"
                      }}>
                          <TouchableOpacity
                              style={{
                                  top: "50%",
                                  left: 20,
                              }}
                          >
                              <Image
                                  source={icons.add}
                                  style={{
                                      width: 30,
                                      height: 30,
                                      resizeMode: "contain"
                                  }}
                              />
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
          );
      }
        return (

            <View style={{padding: 5}}>
                <FlatList

                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingVertical: 10, marginBottom: 10}}

                />

            </View>
        );


    }

    function rendHeader() {
        return (

            <View style={{flexDirection: "row"}}>
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

                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <View style={{
                        height: 50,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 33,
                        backgroundColor: "lightgray",
                        paddingHorizontal: 30,
                        marginRight: 15
                    }}>
                        <Text style={{fontSize: 20, fontWeight: "bold"}}>{restaurant?.name}</Text>
                    </View>
                </View>
            </View>


        );


    }


    return (
        <View style={styles.container}>

            <SafeAreaView>
                {rendHeader()}
                {rendRestaurant()}
                {rendProdus()}
            </SafeAreaView>

        </View>
    );
}
const styles = StyleSheet.create({
    container:
        {
            flex: 1,
            backgroundColor: "lightskyblue",
            paddingTop: 40
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
        width: "90%",
        height: "50%",
        borderWidth: 1,
        top: 15,
        left: 22,
        borderRadius: 20,
        flexDirection: "row"
    },
    restaurantP:
        {
             padding:10
        }


});
export default Restaurant;
