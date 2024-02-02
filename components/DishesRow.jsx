import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const DishesRow = ({ name, id, image, short_description, price }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsClicked((prev) => !prev)}
        className="bg-white border-2 border-purple-200 mx-3 rounded-lg mb-2"
      >
        <View className="flex-row p-2 items-center">
          <View className="flex-1">
            <Text className="text-[20px] font-extrabold">{name}</Text>
            <Text className="flex-wrap">{short_description}</Text>
            <Text className="text-gray-500 pt-2">RWF {price}</Text>
          </View>
          <Image
            source={{ uri: urlFor(image).url() }}
            className="w-[70px] h-[70px]"
          />
        </View>
      </TouchableOpacity>
      {isClicked && (
        <View className="flex-row space-x-4 items-center mx-3 mb-4">
          <TouchableOpacity>
            <MinusCircleIcon color={"green"} size={25} />
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity>
            <PlusCircleIcon color={"green"} size={25} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishesRow;
