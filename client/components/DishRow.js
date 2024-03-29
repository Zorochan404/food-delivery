import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket,  removeFromBasket,  selectBasketItemsWithId } from '../features/basketSlice'

const DishRow = ({id, name, description, price, image}) => {

    const [isPressed, useIsPressed] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector((state)=> selectBasketItemsWithId(state, id))
    const addItemToBasket = ()=> {
        dispatch(addToBasket({id,name, description, price, image }))
    

    }
    const removeItemfromBasket = ()=> {
        dispatch(removeFromBasket({id}))
    

    }

  return (
    <View className="">
    <TouchableOpacity onPress={()=> {useIsPressed(!isPressed)}} className= " bg-white border p-4 border-gray-200">
    <View className= "flex-row "> 
    <View className= "flex-1 p-2">
        <Text className= "text-lg mb-1">{name}</Text>
        <Text className= "text-gray-400">{description}</Text> 
        <Text className= "">{price}</Text>
    </View>
    
    <View>
        <Image source={{uri: urlFor(image).url()}} className= "w-20 h-20 bg-gray-300 p-4 border border-black"/>
    </View>
    </View>
    </TouchableOpacity>


    {isPressed&& (
        <View className= "bg-white px-4">
            <View className="flex-row items-center space-x-2 pb-3 pt-3">
                <TouchableOpacity onPress={removeItemfromBasket}>
                    <MinusCircleIcon color={items.length > 0 ? "#00CCBB" : "gray"} size={40}/>
                </TouchableOpacity>
                <Text>{items.length}</Text> 
                <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon color="#00CCBB" size={40}/>
                </TouchableOpacity>
            </View>
        </View>
    )}
    </View>
    
  )
}

export default DishRow