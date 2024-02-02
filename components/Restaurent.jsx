import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { CogIcon, StarIcon } from "react-native-heroicons/solid";
import { color } from "react-native-tailwindcss";
import { LocalSvg } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../sanity";

const Restaurent = ({
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
}) => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      className="mr-2 "
      onPress={() =>
        navigator.navigate("Restaurant", {
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
        })
      }
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="w-[300px] h-[120px] rounded-md"
      />
      <Text className="text-xl font-bold px-4 my-2">{title}</Text>
      <View className="flex-row items-center  px-4">
        <StarIcon color={"green"} size={20} />
        <Text className="text-gray-500 my-1">
          <Text className="">{rating}</Text> . {genre}
        </Text>
      </View>
      <View className="flex-row gap-4 px-4 pb-3">
        <CogIcon size={22} color="green" />

        <Text>Nearby . {address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Restaurent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
    shadowColor: "gray",
    elevation: 10,
    borderRadius: 10,
  },
});
