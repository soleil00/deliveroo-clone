import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import Restaurent from "./Restaurent";

import rest1 from "../assets/images/rest2.jpeg";
import rest2 from "../assets/images/rest3.jpeg";
import rest3 from "../assets/images/rest4.jpeg";
import { sanityClient } from "../sanity";

const FeaturedRow = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured" && _id == $id] {
            ...,
            restaurants[]-> {
              ...,
              category[]->{
                ...
              },dishes[]->{
                ...
              }
            }
          }[0]
      `,
        { id: id }
      )
      .then((data) => setRestaurants(data.restaurants));
  }, []);

  console.log("received id: ", id);
  // console.log("restaurant: ", restaurants);

  return (
    <View>
      <Image source={"."} />
      <View className="flex-row justify-between items-center mt-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon size={30} color={"blue"} />
      </View>
      <Text className="text-gray-500 text-xs">{description}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurants.map((restaur) => (
          <Restaurent
            key={restaur._id}
            imgUrl={restaur.image}
            address={restaur.address}
            genre={restaur.category?.name}
            id={restaur._id}
            title={restaur.name}
            short_description={restaur.short_description}
            lat={restaur.lat}
            long={restaur.long}
            dishes={restaur.dishes}
            rating={restaur.rating}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
