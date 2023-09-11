import React from 'react';

import { View, Text } from 'react-native';
import MenuIcon from '../components/MenuIcon';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Information from '../pages/Information';
import Watchs from '../pages/Watchs';

export default function AppRoutes(){
    const AppStack = createNativeStackNavigator();
    
    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name='Home' 
                component={Home}
                options={{
                    title: 'Início',
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
