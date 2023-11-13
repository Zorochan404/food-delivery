import { View, Text } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/outline"


const FeaturedRow = ({title, description, featuredCatagories}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Icons.ArrowRightIcon color='#00CCBB'/>
    </View>
  )
}

export default FeaturedRow