import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Information from '../pages/Information';

export default function AppRoutes(){
    const AppStack = createNativeStackNavigator();
    
    return(
        <AppStack.Navigator>
            <AppStack.Screen name='Home' component={Home} />

            <AppStack.Screen
                 name='Informações' 
                 component={Information}
                 options={{
                    headerShown: false,
                 }} 
            />

        </AppStack.Navigator>
    )
}
