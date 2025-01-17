import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';

const RestuarantCard = ({item}) => {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
        onPress={()=>navigation.navigate('Restuarant', {...item})}
    >
        <View 
            style={{
                shadowColor: themeColors.bgColor(0.2),
                shadowRadius:7 
            }}
            className="mr-6 bg-white rounded-3xl shadow-lg"
        >
            <Image className="h-36 w-64 rounded-t-3xl" source={{uri:urlFor(item.image).url()}}/>
            <View className="px-3 pb-4 space-y-2">
                <Text className="text-lg font-bold pt-2" >{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
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
        </View>
    </TouchableWithoutFeedback>
  )
}

export default RestuarantCard