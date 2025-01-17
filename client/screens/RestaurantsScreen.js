import { View,Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import DishRow from '../components/DishRow';
import CardIcon from '../components/cardIcon';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';
import { urlFor } from '../sanity';


const RestaurantsScreen = () => {
  const {params} = useRoute();
  let item = params;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(item && item._id){
      dispatch(setRestaurant({...item}))
    }
  },[])

  return (
   <View>
    <CardIcon/>
    <StatusBar style='light'/>
    <ScrollView>
      <View className="relative">
        <Image className="w-full h-72" source={{uri:urlFor(item.image).url()}}/>
        <TouchableOpacity
        onPress={()=> navigation.goBack()}
          className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow-lg"
        >
          <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
        </TouchableOpacity>
      </View>
      <View
        style={{borderTopLeftRadius:40, borderTopRightRadius:40}}
        className="bg-white -mt-12 pt-6"
      >
        <View className="px-5">
          <Text className="text-3xl font-bold ">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
          <View className="flex-row items-center space-x-1 ">
                        <Icon.Star
                            height="20" width="20"
                            stroke="orange"
                        />
                        <Text className="text-green-700">{item.strars}</Text>
                        <Text className="text-gray-700">
                            ({item.rating} k) - <Text className="font-semibold">{item.reviews}</Text>
                        </Text>
                    </View>
                <View className="flex-row items-center space-x-1">
                    <Icon.MapPin color="gray" width="15" height="15"/>
                    <Text className="text-gray-700 text-xs"> {item.address}</Text>
                </View>  
          </View>
          <Text className="text-gray-500 mt-2">{item.description}</Text>
        </View>
      </View>
      <View className="pb-36 bg-white">
        <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
        {
          item.dishes.map((dish,index) => <DishRow item={{...dish}} key={index}/>)
        }
      </View>
    </ScrollView>
   </View>
  )
}

export default RestaurantsScreen