import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, totalPrice } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { CurrencyRupeeIcon } from 'react-native-heroicons/outline'


const BasketIcon = () => {

    const items = useSelector(selectBasketItems);
    const navigation = useNavigation()
    const total = useSelector(totalPrice)

    if(items.lenght === 0) {return null}
  return (
    <View className= "absolute bottom-10 w-full z-50">
      <TouchableOpacity className= "mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1 justify-between" onPress={() => {navigation.navigate('basketscreen')}}>
        <Text className= "text-white font-extrabold bg-[#01A296] py-1 px-2 text-lg text-center">{items.length}</Text>
        <Text className= "text-lg font-extrabold text-white">View Basket</Text>
        <View className="flex-row items-center">
        <CurrencyRupeeIcon color="white" size={26}/>
        <Text className= "text-lg font-extrabold text-white">{total}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon