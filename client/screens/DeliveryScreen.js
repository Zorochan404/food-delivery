import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { XMarkIcon } from 'react-native-heroicons/outline'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps'

const DeliveryScreen = () => {
    const navigation= useNavigation()
    const restaurant = useSelector(selectRestaurant)


  return (
    <View className="bg-[#00CCBB] flex-1">
    <SafeAreaView style={GlobalStyles.droidSafeArea} >
        <View className="z-50">
        <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity onPress={()=> navigation.navigate('home')}>
                <XMarkIcon color="white" size={30}/>

            </TouchableOpacity>
        </View>
            <View className="bg-white mx-5 rounded-md p-6 z-50 shadow-md">
                <Text className="text-lg text-gray-400">
                    Estimated Arrival
                </Text>
                <Text className="text-4xl font-bold">
                    45-55 Minutes
                </Text>
                <Image source={{
                    uri: "https://links.papareact.com/fls"
                }} className="h-20 w-20"/>
            </View>
           
     
      </View>
        </SafeAreaView>
            <MapView initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
            
            className="flex-1 -mt-96 z-0 "
            mapType='mutedStandard'>
                <Marker
                coordinate={{
                    latitude: restaurant.lat,
                    longitude: restaurant.long,
                }}
                title={restaurant.title}
                identifier="origin"
                pinColor="#00CCBB"
                />
            </MapView>
    </View>
    
  )
}

export default DeliveryScreen