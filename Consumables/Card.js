import React from 'react';
import {View, StyleSheet, Text} from "react-native";

const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardPoza}>
                <Text>1</Text>

            </View>
            <View style={styles.cardContent}>
                {props.children}

            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    card:{
        borderRadius: 6,
        elevation: 3,
        shadowOffset : { width:1 , height: 1 },
        marginHorizontal: 15,
        marginVertical : 6,
    },
    cardContent: {
        marginHorizontal : 18,
        marginVertical : 10,
    },
    cardPoza:{

        marginVertical: 7,
        marginHorizontal: 8,
    }


});
export default Card;
