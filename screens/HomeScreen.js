import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect,useEffect,useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    AdjustmentsHorizontalIcon,
    ChevronDoubleDownIcon,
    ChevronDownIcon, ServerStackIcon, SparklesIcon as SparklesIconOutline, UserIcon
} from "react-native-heroicons/solid"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import { sanityClient } from '../sanity'

const imageAddress="data:image/jpeg;base64,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"

const HomeScreen = () => {
    const [featuredCategories, setFeaturedCategories] = useState([])
    const navigation = useNavigation()

    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'HomeScreen',
            headerShown:false
        }, [])
    })

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"]{
            ...,
            restaurant[]->{
                ...,
                dishes
            }
        }
      `).then(data => setFeaturedCategories(data))
           
    }, [])

    return (
        <SafeAreaView className="flex-1 mx-3" >
     {/* header */}
                <View className="flex-row space-x-3 mx-4 px-4 py-2 m-0 bg-white">
                    <Image source={{
                        uri: imageAddress
                    }}
                        className="w-[50px] h-[50px] rounded-full"
                    />
                    <View className="flex-1">
                        <Text>Deliver now</Text>
                        <Text className="font-bold text-lg">Current Location</Text>
                    </View>
                    <UserIcon size={40} color="#333333"/>
            </View>
            
            {/* search */}

            <View className="flex-row px-3 py-2 my-2 items-center">
                <View className="flex-row items-center flex-1 py-2 gap-2 bg-gray-300">
                    <ServerStackIcon color="blue" size={35} />
                    <TextInput placeholder='Restaurent and food' className="text-[20px]"/>
                </View>
                <AdjustmentsHorizontalIcon color="green" size={40}/>
            </View>

            {/* body here */}
            <ScrollView className="bg-gray-200" showsVerticalScrollIndicator={false}>
                {/* categories */}
                <Categories />
                
                {/* featured row */}
                {featuredCategories.map(category => (
                    <FeaturedRow key={category._id} id={category._id} title={category.name} description={category.short_description}/>
                ))}
                
            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen