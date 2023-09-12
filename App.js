import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Ubuntu_700Bold, Ubuntu_400Regular } from '@expo-google-fonts/ubuntu';

import AuthProvider from './src/contexts/auth';

import Routes from './src/routes';


import { NavigationContainer } from '@react-navigation/native';

export default function App() {

    let [fontsLoaded] = useFonts({
      Ubuntu_700Bold,
      Ubuntu_400Regular,
    });

    if(!fontsLoaded){
      return null;
    }

    
  return (
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor={"transparent"} style='light' translucent={true} />
          <Routes/>
        </AuthProvider>
      </NavigationContainer>
  );
}
