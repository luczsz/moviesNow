import { StatusBar } from 'expo-status-bar';
import Home from './src/pages/Home';

import Routes from './src/routes';
import Dashboard from './src/pages/Dashboard';

import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor={"transparent"} style='dark' translucent={true} />
    <Dashboard/>
    
    </>
  );
}


