import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, useIsFocused} from "@react-navigation/native";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Register from "./Components/Register";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import Basket from "./Components/Basket";
import Restaurant from "./Components/Restaurant";
import Profile from "./Components/Profile";
import * as SecureStore from "expo-secure-store";

const Tab = createBottomTabNavigator();
const Inr = createStackNavigator();
const HomeMain = () => {
    return (
        <Inr.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Inr.Screen name="Home" component={Home}/>
            <Inr.Screen name="Restaurant" component={Restaurant}/>
        </Inr.Navigator>
    );
};

const Profilul = () => {
  return (
      <Inr.Navigator
          screenOptions={{
          headerShown: false
      }}>
          <Inr.Screen name="Login" component={Login}/>
          <Inr.Screen name="Register" component={Register}/>
          <Inr.Screen name="Profile" component={Profile}/>
      </Inr.Navigator>
  );
};


export default function App() {


    return (
        <NavigationContainer>
            <SafeAreaProvider style={styles.container}>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused ? 'utensils' : 'utensils';
                            } else if (route.name === 'Profile') {
                                iconName = focused ? 'user-circle' : 'user';
                            } else if (route.name === 'Basket') {
                                iconName = focused ? 'shopping-basket' : 'shopping-basket';
                            }


                            return <Icon name={iconName} size={size} color={color}/>;
                        },
                    })}

                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',

                    }}

                >

                    <Tab.Screen name="Home" component={HomeMain}/>
                    <Tab.Screen name="Profile" component={Profilul}/>
                    <Tab.Screen name="Basket" component={Basket}/>
                </Tab.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightsalmon',
    },
});
