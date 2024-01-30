import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
    SafeAreaProvider,
    useSafeAreaInsets,
  } from 'react-native-safe-area-context';
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow';

const RestaurantScreen = () => {
    const insets = useSafeAreaInsets();
    const{ params: {
        id,
        imgUrl,
        title,
        short_description,
        rating,
        genre,
        dishes,
        long,
        lat,
        adderss
        },
}= useRoute()

const navigation = useNavigation()

    
  return (
    <ScrollView      style={{
        // paddingTop: insets.top,
        // paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right}} className="">
            <View>
                <Image source={{uri: urlFor(imgUrl).url()}} className= "w-full h-64 bg-gray-300 p-4"/>
                <TouchableOpacity onPress= {navigation.goBack} className= "absolute top-10  left-5 p-2 bg-gray-100 rounded-full">
                    <ArrowLeftIcon size={20} color="#00CCBB"/>
                </TouchableOpacity>
            </View>
            <View className= "bg-white">
                <View className= "px-4 pt-2">
                <Text className= "text-3xl font-bold">{title}</Text>
                <View className= "flex-row space-x-2 my-1">
                <View className= "flex-row items-center space-x-1">
                    <StarIcon color= "green" opacity={0.5} size={22}/>
                    <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
                <MapPinIcon color="gray" opacity={0.4} size={22}/>
                <Text className="text-xs text-gray-500">Nearby . {adderss}</Text>
                </View>
                
                </View>
                <Text className= "text-gray-500 mt-2 pb-4">
                    {short_description}
                </Text>
                </View>
                <TouchableOpacity className= "flex-row items-center space-x-2 border-y p-4 border-gray-300">
                    <QuestionMarkCircleIcon color="gray" size={20}/>
                    <Text className= "pl-2 flex-1 text-md font-bold">Have a food allergy</Text>
                    <ChevronRightIcon color= "#00CCBB"></ChevronRightIcon>
                </TouchableOpacity>
      </View>
      <View>
        <Text className= "px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

        {dishes.map((dish)=> (
            <DishRow
            key={dish._id}
            id= {dish._id}
            name= {dish.name}
            description= {dish.short_description}
            price= {dish.price}
            image= {dish.image}
            />
        ))}
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen