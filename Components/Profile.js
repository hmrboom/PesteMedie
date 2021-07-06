import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, SafeAreaView, TouchableOpacity} from "react-native";
import axios from "axios";

function Profile() {
    const [data, setData] = useState([]);

    function request() {


        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjU2MTE4NjksInVzZXJfbmFtZSI6IlZpbGN1aXVzdGluM0BnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sImp0aSI6IjVhNDA4OWQyLTlmNDEtNGU1Ni04MjY4LWMwYmY1NzU4ZGFhYSIsImNsaWVudF9pZCI6Im92aWRpdXMiLCJzY29wZSI6WyJ3ZWIiXX0.NfiyOlMEuovsg0keIWt_gyWBaMF4sXov2g9L3SaY3LLS5TG-ysnPw8vbNAThyqHwimtAMligykOeDzxiV_R4PROy1ZfxgpEw-T49uNm7mHr0vpeajrENXS_IqKxZ0wvMrRT3pM9RFLa4GLsI9F8uRDhxo-4TXrzuT4TkksKRlH7H3p4_JwpThu8mKMq8_z8cw4B2f7EFcXP1bdnropa3vf-hpzqb4T5SNJGZCiH3v9kzM7tlCLWQLXw_imM-w0IfHvTsHtJC-k71_PgcahCS4B2YTlk-SgpsEkGGOLtz3Q20J4sIS-tzdhbaY_Jmajjh2rxuRXjjjoS1i66oi6sbHw")
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        axios.get('http://10.0.2.2:8080/retrivePersonalData',
            {
                headers: {
                    "Authorization": "Bearer " + "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjU2MTE4NjksInVzZXJfbmFtZSI6IlZpbGN1aXVzdGluM0BnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sImp0aSI6IjVhNDA4OWQyLTlmNDEtNGU1Ni04MjY4LWMwYmY1NzU4ZGFhYSIsImNsaWVudF9pZCI6Im92aWRpdXMiLCJzY29wZSI6WyJ3ZWIiXX0.NfiyOlMEuovsg0keIWt_gyWBaMF4sXov2g9L3SaY3LLS5TG-ysnPw8vbNAThyqHwimtAMligykOeDzxiV_R4PROy1ZfxgpEw-T49uNm7mHr0vpeajrENXS_IqKxZ0wvMrRT3pM9RFLa4GLsI9F8uRDhxo-4TXrzuT4TkksKRlH7H3p4_JwpThu8mKMq8_z8cw4B2f7EFcXP1bdnropa3vf-hpzqb4T5SNJGZCiH3v9kzM7tlCLWQLXw_imM-w0IfHvTsHtJC-k71_PgcahCS4B2YTlk-SgpsEkGGOLtz3Q20J4sIS-tzdhbaY_Jmajjh2rxuRXjjjoS1i66oi6sbHw"
                }
            }
        )
            .then(result => {
                    let cv
                    cv = result.data



                console.log("-----------")
                }
            )
            .catch(error =>
                console.log(error)

            )
    }

    useEffect(() => {
        request()
    }, [])

    return (
        <View style={styles.container}>
            <View style={{flexDirection: "column", alignItems: "center"}}>
                {
                    data &&
                    <Image
                    source={{uri: "http://10.0.2.2:8080" + data[0].path}}
                    style={{
                    width: "100%",
                    height: "50%",
                    resizeMode: "contain",
                    borderRadius: 50
                }}
                    />
                }
                <Text style={{ fontSize:25 }}>
                    {data[0].nume} {data[0].prenume}
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
                    Email: {data[0].email}   {"\n"}
                    Sex: {data[0].sex}  {"\n"}
                    {

                    }

                </Text>
            </View>


        </View>

    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightskyblue",
        paddingTop: 40
    }


})
export default Profile;
