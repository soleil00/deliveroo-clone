import { View, Text, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import CategoryCard from './CategoryCard'
import { sanityClient } from '../sanity'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
     sanityClient.fetch(`
            *[_type == "category"]{
                ...
            }`).then(data=>setCategories(data))
    
  },[])
  return (
      <ScrollView horizontal contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical:15
      }}
          showsHorizontalScrollIndicator={false} 
      >
          
      {categories.map(category=>{
        return (
          <CategoryCard key={category._id} imgUrl={category.image} title={category.name} />
        )
      })}
          
      
    </ScrollView>
  )
}

export default Categories