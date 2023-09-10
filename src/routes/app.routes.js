import React from "react";

import { AntDesign, Feather } from '@expo/vector-icons';
import { theme } from "../global/theme";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Category from '../pages/Category';
import Account from '../pages/Account';
import Dashboard from "../pages/Dashboard";

import Filmes from "../pages/Filmes";
import Films from "../pages/teste";

export default function AppRoutes(){
     const AppStackt = createNativeStackNavigator();
     const TabsStack = createBottomTabNavigator();


    /* function Tabs(){
        return(
            <TabsStack.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#121212',

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

                <TabsStack.Screen 
                    name="Dashboard" 
                    component={Dashboard}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <AntDesign name="dashboard" size={24} color={theme.colors.secondary} />
                        }
                            return <AntDesign name="dashboard" size={24} color="#DDD" />
    
                        }
                    }} 
                />




            </TabsStack.Navigator>
        )
    } */

    return(
        <AppStackt.Navigator>
            <AppStackt.Screen 
                name="Home" 
                component={Tabs}
                options={{
                    headerShown: false,
                }} 
            />

        </AppStackt.Navigator>
    );
};
