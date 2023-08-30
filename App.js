import { StatusBar } from 'expo-status-bar';
import Home from './src/pages/Home';

import Routes from './src/routes';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>

     <StatusBar backgroundColor={"transparent"} style='light' translucent={true} />
      <Routes/>
    </NavigationContainer>
  );
}


