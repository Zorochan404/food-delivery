import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CatagoryCard from './CatagoryCard'

const Catagories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
      paddingTop: 10,
      paddingHorizontal: 15

    }}
    horizontal 
    showsHorizontalScrollIndicator={false}>

      {/* catagory */}
      <CatagoryCard imgUrl = "https://links.papareact.com/gn7" title = "testing"/>
      <CatagoryCard imgUrl = "https://links.papareact.com/gn7" title = "testing"/>
      <CatagoryCard imgUrl = "https://links.papareact.com/gn7" title = "testing"/>
      <CatagoryCard imgUrl = "https://links.papareact.com/gn7" title = "testing"/> 
      <CatagoryCard imgUrl = "https://links.papareact.com/gn7" title = "testing"/> 
      <CatagoryCard imgUrl = "https://links.papareact.com/gn7" title = "testing"/> 
      <CatagoryCard imgUrl = "https://links.papareact.com/gn7" title = "testing"/> 
    </ScrollView>
  )
}

export default Catagories