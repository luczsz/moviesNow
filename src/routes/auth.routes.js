import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingOut from '../pages/SingOut';

export default function AuthRoutes(){
    
    const AuthStack = createNativeStackNavigator();
    
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name='Cadastro' 
                component={SingOut} 
                options={{
                    title: 'C A D A S T R A R',
                    headerTintColor: '#f5f5f5',
                    headerLeft: () => <Feather name='arrow-left-circle' size={30} color={'#f5f5f5'} style={{marginRight: 10,}} />,
                    headerStyle:{
                        backgroundColor: '#08081D',
                    }
                }}
            />
        </AuthStack.Navigator>
    )
}
