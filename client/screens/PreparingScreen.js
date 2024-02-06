import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import GlobalStyles from '../GlobalStyles'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const PreparingScreen = () => {
    const navigation = useNavigation()

     
    useEffect(()=> {
        setTimeout(() => {
            navigation.navigate("delivery")
        },4000)
    },[4000])
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} >
        <View className="bg-[#F47321] flex-1 justify-center items-center">
        <Animatable.Image
        source={require("../assets/PendingOrder.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
        />
        
        <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
        >
            Waiting for restaurant to accept your order
        </Animatable.Text>
        </View>
    </SafeAreaView>
   
  )
}

export default PreparingScreen