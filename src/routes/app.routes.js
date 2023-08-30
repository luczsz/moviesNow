import React from "react";

import { AntDesign } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Category from '../pages/Category';
import Account from '../pages/Account';

export default function AppRoutes(){
     const AppStackt = createNativeStackNavigator();
     const TabsStack = createBottomTabNavigator();


    function Tabs(){
        return(
            <TabsStack.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    position: 'absolute',
                    backgroundColor: '#121212',

                    borderTopWidth: 0,

                    //bottom: 14,
                    elevation: 0,
                    //borderRadius: 4,
                    height: 60,
                                
                }
            }}
            
            
            >
                <TabsStack.Screen 
                    name="inicio" 
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size, focused}) => {
                            if(focused){
                            return <AntDesign name="home" size={24} color={'#f5f5f5'} />
                        }
                            return <AntDesign name="home" size={24} color="#DDD" />
    
                        }
                    }} 
                />
            </TabsStack.Navigator>
        )
    }

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
