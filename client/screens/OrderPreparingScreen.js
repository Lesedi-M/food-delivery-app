import { View,Image, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderPreparingScreen = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery');
        },3000)
    })
  return (
    <View className="flex-1 bg-white justify-center">
      <Image source={require('../assets/images/del3.gif')} className="ml-5 h-80 w-80" />
    </View>
  )
}

export default OrderPreparingScreen