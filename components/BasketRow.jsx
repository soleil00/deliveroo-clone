import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const BasketRow = () => {
  return (
    <TouchableOpacity className="z-40 fixed bottom-10">
      <View className="flex-row items-center justify-between p-5 bg-blue-400 mx-5 rounded-md">
        <Text className="text-center bg-gray-500 rounded-md py-2 px-4">0</Text>
        <Text className="text-white text-bold text-[20px]">View Basket</Text>
        <Text className="text-white text-bold text-[20px]">RWF 23,456</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BasketRow;
