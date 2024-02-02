import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { color } from "react-native-tailwindcss";
import { urlFor } from "../sanity";
import DishesRow from "../components/DishesRow";
import BasketRow from "../components/BasketRow";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      address,
      genre,
      dishes,
      long,
      lat,
      rating,
      title,
      short_description,
    },
  } = useRoute();
  const navigator = useNavigation();

  console.log("received dish : ", dishes[0]);

  return (
    <ScrollView className="relative flex-1">
      <View className="relative bg-white">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-[220px]"
        />
        <TouchableOpacity
          onPress={() => navigator.goBack()}
          className="font-bold absolute top-10 left-2 bg-white text-center p-4 rounded-full text-xl px-4"
        >
          <ArrowLeftIcon size={22} color="green" />
        </TouchableOpacity>
      </View>
      <View className="pb-3">
        <Text className="text-[25px] font-bold mx-3 py-2">{title}</Text>
        <View className="flex-row">
          <View className="flex-row items-center mx-3">
            <StarIcon size={22} color={"red"} />
            <Text className="text-[16px]"> {rating}</Text>
            <Text className="text-[16px]"> {genre}/g </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-[16px]">NearBy</Text>
            <Text className="text-[16px]"> . {address}</Text>
          </View>
        </View>
        <View className="mx-3 py-2 ">
          <Text className="text-[15px] text-gray-500 font-bold">
            {short_description}
          </Text>
        </View>
        <TouchableOpacity className="flex-row mx-3 p-2 justify-between items-center border-2 border-gray-300 rounded-md">
          <View className="flex-row items-center space-x-4">
            <QuestionMarkCircleIcon size={25} color="gray" />
            <Text className="font-bold text-[20px]">Have food allergy</Text>
          </View>
          <ChevronRightIcon size={22} color={"black"} className="flex-1" />
        </TouchableOpacity>
        <Text className="text-lg font-extrabold text-[20px] p-3 text-center">
          Menu
        </Text>
        {dishes?.map((dish) => (
          <DishesRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            image={dish.image}
            short_description={dish.short_description}
            price={dish.price}
          />
        ))}
      </View>
      {/* <BasketRow /> */}
      <TouchableOpacity className="z-40 fixed bottom-10">
        <View className="flex-row items-center justify-between p-5 bg-blue-400 mx-5 rounded-md">
          <Text className="text-center bg-gray-500 rounded-md py-2 px-4">
            0
          </Text>
          <Text className="text-white text-bold text-[20px]">View Basket</Text>
          <Text className="text-white text-bold text-[20px]">RWF 23,456</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RestaurantScreen;
