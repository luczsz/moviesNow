import React from 'react';

import { View, Text } from 'react-native';
import MenuIcon from '../components/MenuIcon';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../global/theme';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Pages Menu
import Home from '../pages/Home';
import Account from '../pages/Account';

//Pages Gerais
import Information from '../pages/Information';
import Watchs from '../pages/Watchs';

export default function AppRoutes(){
    const AppStack = createNativeStackNavigator();
    const AppTabs = createBottomTabNavigator();

    function Tabs(){
        return(
        <AppTabs.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: theme.colors.secondary85,

                    borderTopWidth: 0,

                    bottom: 16,
                    elevation: 0,
                    borderRadius: 4,
                    height: 60,
                    marginLeft: 14,
                    marginRight: 14,
                                
                }
            }}
        >
            <AppTabs.Screen 
                name='Inicio' 
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused){
                        return <AntDesign name="home" size={24} color={theme.colors.white90} />
                    }
                        return <AntDesign name="home" size={24} color={theme.colors.discord} />

                    }
                }} 
            />
            <AppTabs.Screen 
                name='Dados' 
                component={Account}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused}) => {
                        if(focused){
                        return <AntDesign name="user" size={24} color={theme.colors.white90} />
                    }
                        return <AntDesign name="user" size={24} color={theme.colors.discord} />

                    }
                }} 
            />

        </AppTabs.Navigator>

        )
    }
    
    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name='Home' 
                component={Tabs}
                options={{
                    title: 'Movies Now',
                    headerRight: () => <MenuIcon  />,
                    headerTintColor: '#f5f5f5',
                    headerStyle:{
                        backgroundColor: '#08081d',
                        
                    }
                }} 
            />

            <AppStack.Screen
                 name='Informações' 
                 component={Information}
                 options={{
                    headerShown: false,
                 }} 
            />

            <AppStack.Screen
                 name='Assistir' 
                 component={Watchs}
                 options={{
                    title: 'Assistir',
                    headerTintColor: '#f5f5f5',
                    headerStyle:{
                        backgroundColor: '#08081d',
                        
                    }
                }} 
            />

        </AppStack.Navigator>
    )
}
