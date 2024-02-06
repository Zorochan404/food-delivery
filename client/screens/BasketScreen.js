import { View, Text, SafeAreaView, Touchable, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect,  useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, totalPrice } from '../features/basketSlice';
import { StyleSheet, Platform } from 'react-native';
import GlobalStyles from '../GlobalStyles';
import { CurrencyRupeeIcon, XCircleIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';

const BasketScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch()
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const basketTotal = useSelector(totalPrice)





    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results; 
        }, {})
        setGroupedItemsInBasket(groupedItems);

    },[items])


    // console.log(groupedItemsInBasket)


  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
        <View className="p-3 border-b border-[#00CCBB]">
            <View>
                <Text className= "text-lg font-bold text-center">Basket</Text>
                <Text className="text-center text-gray-400" >{restaurant.title}</Text>
            </View>
            
            <TouchableOpacity onPress={navigation.goBack} className="pt-3 rounded-full top-1 absolute right-5">
                <XCircleIcon color="#00CCBB" height={35} width={35}/>
            </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
            <Image source={{
                uri: "https://links.papareact.com/wru"
            }} className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
            <Text className="flex-1">Deliver in 20-30 min</Text>
            <TouchableOpacity className=""> 
                <Text className="text-[#00CCBB]">
                    Change
                </Text>
            </TouchableOpacity>
        </View>
        <ScrollView >
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                    <Text>{items.length} x</Text>
                    <Image source={{uri: urlFor(items[0]?.image).url()}} className="h-12 w-12 rounded-full"/>
                    <Text className="flex-1">{items[0]?.name}</Text>
                    <CurrencyRupeeIcon color="black"/>
                    <Text className="text-gray-600">
                         {items[0]?.price}
                    </Text>
                    <TouchableOpacity onPress={()=> dispatch(removeFromBasket({id: key}))}>
                        <Text className="text-red-600">
                            Remove
                        </Text>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
            <View className="flex-row justify-between ">
                <Text className="text-gray-400">Subtotal</Text>
                <View className="flex-row items-center space-x-1">
                <CurrencyRupeeIcon color="black"/>
                <Text className="text-gray-400">{basketTotal}</Text>
                </View>
            </View>
            <View className="flex-row justify-between ">
                <Text className="text-gray-400">Delivery Fee</Text>
                <View className="flex-row items-center space-x-1">
                <CurrencyRupeeIcon color="black"/>
                <Text className="text-gray-400">5</Text>
                </View>
            </View>
            <View className="flex-row justify-between ">
                <Text className="text-black-400 font-extrabold text-lg">Order total</Text>
                <View className="flex-row items-center space-x-1">
                <CurrencyRupeeIcon color="black"/>
                <Text className="text-black-400 font-extrabold text-lg">{basketTotal + 5}</Text>
                </View>
            </View>
            <TouchableOpacity className="bg-[#00CCBB] rounded-lg p-3" onPress={()=> navigation.navigate('preparingscreen')}>
                    <Text className="text-center text-white text-lg font-bold">  
                        Place order
                    </Text>
                </TouchableOpacity>
        </View>
        </View>
    </SafeAreaView>
  );
};

export default BasketScreen