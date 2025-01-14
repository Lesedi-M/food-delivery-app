import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestuarantCard from './restuarantCard'

const FeaturedRow = ({title, description, restuarants}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4 ">
        <View>
            <Text className="font-bold text-lg" >{title}</Text>
            <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15
        }}
        className="overflow-visible py-5"
      >
        {
            restuarants.map((restuarant, index)=>{
                return (
                    <RestuarantCard 
                        key={index}
                        item={restuarant}
                    />
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default FeaturedRow