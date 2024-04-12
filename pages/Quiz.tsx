import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, TouchableHighlight, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import { Country } from "../types/Country";
import AppModal from "../components/AppModal";

export default function Quiz() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [countries, setCountries] = useState<Country[]>([]);

  const [selectedCountry, setSelectedCountry] = useState<Country>();

  const [points, setPoints] = useState(0);

  const [lost, setLost] = useState(false);

  const [imgXml, setImgXml] = useState(null);

  function handleCountrySelection(country: Country) {
    reload();
    if (country.alpha2Code === selectedCountry?.alpha2Code) {
      setPoints(points + 1);
    } else {
      setLost(true);
    }
  }

  function reload() {
    setImgXml(null);
    const allCountries = require("../assets/independentCountries.json");

    const randomCountries = allCountries
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    setCountries(randomCountries);

    setSelectedCountry(
      randomCountries[Math.floor(Math.random() * randomCountries.length)]
    );
  }

  function loadHighlitColor(country: Country) {
    if (country?.alpha2Code === selectedCountry?.alpha2Code) {
      return "green";
    }
    return "red";
  }

  async function getImgXml() {
    const url = `http://192.168.0.13:3000/${selectedCountry?.alpha2Code.toLowerCase()}.svg`;
    const xml = await (await fetch(url)).text();
    setImgXml(xml);
  }

  useEffect(() => {
    reload();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      getImgXml();
    }
  }, [selectedCountry]);

  return (
    <View className="flex items-center justify-between h-full pb-4 bg-gray-800 pt-14">
      <AppModal
        onConfirm={() => {
          setPoints(0);
          setLost(false);
          reload();
        }}
        points={points}
        isVisible={lost}
      ></AppModal>
      <View className="flex flex-row items-center justify-between w-5/6 mt-4">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
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
          className="flex items-center justify-center px-2 py-2 bg-[#5D5D81] rounded-full shadow-xl w-14 h-14 shadow-black"
        >
          <AntDesign name="reload1" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View className="items-center justify-center flex-1 w-5/6 p-4 my-6 bg-gray-700 rounded-md shadow-lg shadow-black">
        {imgXml !== null ? (
          <SvgXml
            width={"100%"}
            height={"100%"}
            fill={"white"}
            onError={() => {
              reload();
            }}
            xml={imgXml.replace(/fill="#[0-9a-f]{6}"/g, `fill="white"`)}
            viewBox="0 0 1024 1024"
          ></SvgXml>
        ) : (
          <Text className="text-lg text-white">Carregando...</Text>
        )}
      </View>
      <View className="flex flex-col items-center justify-center w-full gap-4">
        {countries?.map((country) => {
          return (
            <TouchableHighlight
              key={country.alpha2Code}
              underlayColor={loadHighlitColor(country)}
              onPress={() => handleCountrySelection(country)}
              className="items-center w-5/6 px-8 py-4 bg-[#5D5D81] rounded-full shadow-xl shadow-black"
            >
              <Text className="text-xl font-medium text-white">
                {country.translations.pt}
              </Text>
            </TouchableHighlight>
          );
        })}
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
