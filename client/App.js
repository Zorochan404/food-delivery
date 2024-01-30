import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import {Store} from './Store';

const Stack = createNativeStackNavigator();


const App = () => {



  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store= {Store}>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="restaurant"
          component={RestaurantScreen}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
    </SafeAreaProvider>
    
  );
}

export default App;

