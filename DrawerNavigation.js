import React from 'react';
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const DrawerNavigation = () => {
    return (

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'utensils' : 'utensils';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'user-circle' : 'user';
                        }

                        // You can return any component that you like here!
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
            </Tab.Navigator>

    );
};

export default DrawerNavigation;
