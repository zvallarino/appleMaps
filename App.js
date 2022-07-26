import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux'
import { store } from './store';
import { SafeAreaProvider } from "react-native-safe-area-context"
import MapScreen from './screens/MapScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Provider store={store}>
        <TailwindProvider>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen 
            name="Home" component={HomeScreen}
            options = {{headerShown:false,}} 
            /> 
            <Stack.Screen 
            name="MapScreen" 
            component={MapScreen}
            options = {{headerShown:false,}} 
            /> 
          </Stack.Navigator>
          </SafeAreaProvider>
        </TailwindProvider>
    </Provider>
  </NavigationContainer>
  );
}


