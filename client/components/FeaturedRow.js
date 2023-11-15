import { View, Text, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as Icons from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'
import client from '../sanity'


const FeaturedRow = ({id ,title, description, imgUrl}) => {
const [restaurant, setRestaurants] = useState()




  useEffect(() => {
    client.fetch(
    `      
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{name}
        },
      }[0]`,{id: id}
    )
    .then((data)=>{
      setRestaurants(data?.restaurants)
    })
  }, [])

  console.log(restaurant)

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

        {restaurant?.map((catagory) => (
          <RestaurantCard
          key={catagory._id}
          imgUrl={catagory.image}
          id={catagory._id}
          title= {catagory.name}
          short_description = {catagory.short_description}
          rating= {catagory.rating}
          genre = {catagory.type?.name}
          dishes ={catagory.dishes}
          long = {catagory.lon}
          lat = {catagory.lat}
          adderss ={catagory.address}
          />


        ))}
        
      </ScrollView>
    </View>
  )
}

export default FeaturedRow