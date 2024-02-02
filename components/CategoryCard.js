import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
          <Image source={{uri:urlFor(imgUrl).url()}}
              className="w-[130px] h-[130px] rounded-md" 
          />
          <Text className="text-blue-500 left-1 absolute text-[25px] bottom-2  font-bold">{title }</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard