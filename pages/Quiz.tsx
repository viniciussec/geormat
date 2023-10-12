import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { SvgUri } from "react-native-svg";

type Country = {
  name: string;
  code: string;
  url: string;
};

export default function Quiz() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [countries, setCountries] = useState<Country[]>([]);

  const [selectedCountry, setSelectedCountry] = useState<Country>();

  useEffect(() => {
    const allCountries = require("../assets/countries.json"); 

    const randomCountries = allCountries.sort(() => 0.5 - Math.random()).slice(0, 4);

    setCountries(randomCountries);

    setSelectedCountry(randomCountries[Math.floor(Math.random() * randomCountries.length)]);
  }, []);

  return (
    <View className="flex items-center justify-between h-full pb-10 bg-gray-800 pt-14">
      <Text className="text-lg text-white">Que país é este?</Text>
      <View className="items-center justify-center flex-1 w-5/6 p-4 my-6 bg-gray-700 rounded-md shadow-lg shadow-black">
        <SvgUri
          color={"white"}
          width={"100%"}
          fill={"white"}
          uri={selectedCountry?.url}
        ></SvgUri>
      </View>
      <View className="flex flex-col items-center justify-center w-full gap-4">
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black"
        >
          <Text className="text-xl font-medium text-white">{countries[0]?.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black"
        >
          <Text className="text-xl font-medium text-white">{countries[1]?.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black"
        >
          <Text className="text-xl font-medium text-white">{countries[2]?.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black"
        >
          <Text className="text-xl font-medium text-white">{countries[3]?.name}</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
