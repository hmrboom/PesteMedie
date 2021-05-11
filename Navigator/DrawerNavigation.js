import React from 'react';
import Profile from "../Components/Profile";
import Home from "../Components/Home";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Basket from "../Components/Basket";
import {SafeAreaView, Text} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
const Tab = createBottomTabNavigator();
const DrawerNavigation = () => {
    return (
        <SafeAreaProvider>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'utensils' : 'utensils';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'user-circle' : 'user';
                        }
                        else if (route.name === 'Basket'){
                            iconName = focused ? 'shopping-basket' : 'shopping-basket';
                        }


                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}

                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',

                }}

            >

                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Basket" component={Basket} />

            </Tab.Navigator>
        </SafeAreaProvider>
    );
};
function Demo(){
    return(
        <SafeAreaView style={{flex: 1,backgroundColor:'red'}}>
      <Text>ALinu</Text>
        </SafeAreaView>
    );
}
export default DrawerNavigation;
