import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'


const FeaturedRow = ({title, description, featuredCatagories}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
      <Text className="font-bold text-xl">{title}</Text>
      <Icons.ArrowRightIcon color='#00CCBB'/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      className="pt-4">

        {/* RestaurantCard */}
        <RestaurantCard
        imgUrl="https://links.papareact.com/gn7"
        id={123}
        title= "Nuts and Brews"
        short_description = "this a test description"
        rating= {4.5}
        genre = "Japanese"
        dishes ={[]}
        long = {20}
        lat = {0}
        adderss = "123 Main Street"
        />

      <RestaurantCard
        imgUrl="https://links.papareact.com/gn7"
        id={124}
        title= "Nuts and Brews"
        short_description = "this a test description"
        rating= {4.5}
        genre = "Japanese"
        dishes ={[]}
        long = {20}
        lat = {0}
        adderss = "123 Main Street"
        />

      <RestaurantCard
        imgUrl="https://links.papareact.com/gn7"
        id={125}
        title= "Nuts and Brews"
        short_description = "this a test description"
        rating= {4.5}
        genre = "Japanese"
        dishes ={[]}
        long = {20}
        lat = {0}
        adderss = "123 Main Street"
        />

      <RestaurantCard
        imgUrl="https://links.papareact.com/gn7"
        id={126}
        title= "Nuts and Brews"
        short_description = "this a test description"
        rating= {4.5}
        genre = "Japanese"
        dishes ={[]}
        long = {20}
        lat = {0}
        adderss = "123 Main Street"
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow