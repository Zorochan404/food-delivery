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
import store from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingScreen from './screens/PreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';


const Stack = createNativeStackNavigator();


const App = () => {



  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store= {store}>
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
        <Stack.Screen
          name="basketscreen"
          component={BasketScreen}
          options={{
            headerShown:false,
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="preparingscreen"
          component={PreparingScreen}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="delivery"
          component={DeliveryScreen}
          options={{
            headerShown:false,
          }}
        />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
    </SafeAreaProvider>
    
  );
}

export default App;

