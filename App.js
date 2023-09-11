import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home';
import AppRoutes from './src/routes/app.routes';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
       <StatusBar backgroundColor={"transparent"} style='light' translucent={true} />
       <AppRoutes/>
      </NavigationContainer>
  );
}
