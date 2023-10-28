import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { SvgUri } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { Country } from "../types/Country";

export default function Quiz() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [countries, setCountries] = useState<Country[]>([]);

  const [selectedCountry, setSelectedCountry] = useState<Country>();

  const [points, setPoints] = useState(0);

  function handleCountrySelection(country: Country) {
    reload();
    if (country.alpha2Code === selectedCountry?.alpha2Code) {
      setPoints(points + 1);
    } else {
      setPoints(0);
    }
  }

  function reload() {
    const allCountries = require("../assets/countries.json");

    const randomCountries = allCountries
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    setCountries(randomCountries);

    setSelectedCountry(
      randomCountries[Math.floor(Math.random() * randomCountries.length)]
    );
  }

  useEffect(() => {
    reload();
  }, []);

  return (
    <View className="flex items-center justify-between h-full pb-4 bg-gray-800 pt-14">
      <View className="flex flex-row items-center justify-between w-5/6 mt-4">
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="flex items-center justify-center px-2 py-2 bg-red-500 rounded-full shadow-xl w-14 h-14 shadow-black"
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex gap-4">
          <Text className="text-lg text-white">Que país é este?</Text>
          <Text className="self-center text-sm text-white">
            {points} pontos
          </Text>
        </View>
        <TouchableOpacity
          onPress={reload}
          className="flex items-center justify-center px-2 py-2 bg-red-500 rounded-full shadow-xl w-14 h-14 shadow-black"
        >
          <AntDesign name="reload1" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View className="items-center justify-center flex-1 w-5/6 p-4 my-6 bg-gray-700 rounded-md shadow-lg shadow-black">
        {selectedCountry && (
          <SvgUri
            color={"white"}
            width={'100%'}
            height={'100%'}
            fill={"white"}
            viewBox="0 0 1024 1024"
            uri={`https://staging.teuteuf-assets.pages.dev/data/worldle/countries/${selectedCountry?.alpha2Code.toLowerCase()}/vector.svg`}
          ></SvgUri>
        )}
      </View>
      <View className="flex flex-col items-center justify-center w-full gap-4">
        <TouchableOpacity
          onPress={() => handleCountrySelection(countries[0])}
          className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black"
        >
          <Text className="text-xl font-medium text-white">
            {countries[0]?.translations.pt}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCountrySelection(countries[1])}
          className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black"
        >
          <Text className="text-xl font-medium text-white">
            {countries[1]?.translations.pt}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCountrySelection(countries[2])}
          className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black"
        >
          <Text className="text-xl font-medium text-white">
            {countries[2]?.translations.pt}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCountrySelection(countries[3])}
          className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black"
        >
          <Text className="text-xl font-medium text-white">
            {countries[3]?.translations.pt}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
