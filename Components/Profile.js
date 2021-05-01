import React from 'react';
import {Button, StyleSheet, View} from "react-native";

const Profile = () => {
    return (
        <View styles={styles.main}>
            <Button
                onPress={()=> navigation.navigate('Profile')}
                title="Profile frate"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Profile;
