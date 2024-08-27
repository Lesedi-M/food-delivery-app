import { View,Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { catergoris } from '../constants'
import { getCategories } from '../api';
import { urlFor } from '../sanity';

const Catergorise = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  let [category,setCategories] = useState([])

  useEffect(()=>{
    getCategories().then(data=>{
      setCategories(data);
    })
  },[])
  return (
    <View className="mt-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
            paddingHorizontal:15
        }}
      >
        {
            category.map((category,index)=>{
              let isActive = category._id === activeCategory;
              let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
              let textClass = isActive ? 'font-bold text-gray-800' : 'text-gray-500';

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                className={`p-3 rounded-full shadow ${btnClass}`} // Updated class concatenation
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={{uri: urlFor(category.image).url()}}
                />
              </TouchableOpacity>
              <Text className={`text-sm pt-2 ${textClass}`}> {/* Corrected spacing issue */}
                {category.name}
              </Text>
                    </View>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default Catergorise