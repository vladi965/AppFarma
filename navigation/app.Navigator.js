import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { StorePantalla } from '../screens/Home';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Tiendas: "grid-outline",
    Mapa: "earth-outline",
    Cuenta: "person"
}

const Maps = () => <Text>Mapa</Text>
const Account = () => <Text>Perfil</Text>

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color}) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: '#C7364B',
        tabBarInactiveTintColor: 'gray',
    }
}


export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Tiendas" component={StorePantalla}/>
            <Tab.Screen name="Mapa" component={Maps}/>
            <Tab.Screen name="Cuenta" component={Account}/>
        </Tab.Navigator>
    </NavigationContainer>
)



/* function MyTabs() {
     return (
         <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63'
            }}
         >
        <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
            }}
        />
        
        <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),
            }}
        />

        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }}
        />
         </Tab.Navigator>
     )   
} */


/* export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
} */


