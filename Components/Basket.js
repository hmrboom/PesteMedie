import React, {useState} from 'react';
import {Image,Button, View, StyleSheet, Platform, Text, TouchableOpacity} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const Basket = ({}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        console.log("date->"+date);
        console.log("ce am ales->"+currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


    return (
        <View style={styles.container}>
            <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
            </View>
            {show && (
                <RNDateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    display="default"
                    minimumDate={new Date(1951, 0, 1)}
                    onChange={onChange}
                />
            )}
            <Button onPress={()=> console.log(date.getDate() + " " + date.getMonth() + " " + date.getFullYear())} title="ia?"/>
            <Text>h</Text>
            <TouchableOpacity
                style={styles.buttonGPlusStyle}
                activeOpacity={0.5}>
                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/google-plus.png',
                    }}
                    style={styles.buttonImageIconStyle}
                />
                <View style={styles.buttonIconSeparatorStyle} />
                <Text style={styles.buttonTextStyle}>
                    Login Using Google Plus
                </Text>
            </TouchableOpacity>

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
});
export default Basket;
