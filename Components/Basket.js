import React, {useEffect, useState} from 'react';
import {Image,Button, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import axios from "axios";


const Basket = ({}) => {

const [produse,setProduse] = useState([]);
    function componentDidMount() {
        axios.get('http://10.0.2.2:8080/getproducatoripaginated?page=1&size=15')
            .then(res =>{
                setProduse(res.data);
                produse.map(item =>
                    {

                            console.log(item.produse);


                    }

                )
            })
    }
    useEffect(() => {
        axios.get('http://10.0.2.2:8080/getproducatoripaginated?page=1&size=15')
            .then(res =>{
                res.data.map(item=>{
                    item.produse.map(ceva=>

                    {
                        console.log(ceva.denumire)
                    })

                })





            })
    }, [])



    return (
        <View style={styles.container}>

            <Button style={{ padding:50 }}  title="Dap"/>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
    mere:{
        justifyContent:"center"

    }
});
export default Basket;
