import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import * as Icons from "react-native-heroicons/outline"
import Catagories from '../components/Catagories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';

const HomeScreen = () => {

  const insets = useSafeAreaInsets();
  const [featuredCatagories, setFeaturedCatagories] =  useState([])




  useEffect(() => {
    client.fetch(
    `      
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }`
    )
    .then((data)=>{
      setFeaturedCatagories(data)
    })
  }, [])


  return (
    
    <View className="bg-white pt-2 mb-0 flex-1" >
    <View
    className="flex-row pb-3 items-center mx-4 space-x-2"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Image
       source={{
        uri: "https://links.papareact.com/wru"
       }}
       className="w-7 h-7 bg-gray-300  p-4 rounded-full"
      />
      <View className="flex-1">
       <Text className = "font-bold text-gray-400 text-xs">Deliver now!</Text>
       <Text className="font-bold text-xl">Current Location
       <Icons.ChevronDownIcon size={20} color="#00CCBB"/></Text>
      </View>
      <Icons.UserIcon size={32} color="#00CCBB"/>
    </View>
    {/* search */}

    <View className="flex-row items-center space-x-2 mx-4 mt-3 mb-3">
    <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-3">
      <Icons.MagnifyingGlassIcon color="gray" size={20}/>
      <TextInput placeholder='Restaurants and Cuisines'
      keyboardType='default'/>
    </View>
      <Icons.AdjustmentsVerticalIcon color="#00CCBB"/>  
    </View>



    

        {/* scrollview */}

        <ScrollView className="bg-gray-100 flex-1">  

        {/* catagories */}
        <Catagories/>

        {featuredCatagories?.map((catagory)=> (
          <FeaturedRow
          key={catagory._id}
          id={catagory._id}
          title={catagory.name}
          description={catagory.short_description}
          imgUrl= {catagory.image}/>
        ))}
  
      </ScrollView>
      </View>
      
  );
};

export default HomeScreen;
