import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function startGame() {
    navigation.navigate("Quiz");
  }

  function startLevelsGame() {
    navigation.navigate("Levels");
  }

  return (
    <View className="flex items-center h-full pb-10 bg-gray-800 pt-14">
      <View className="flex items-center justify-center flex-1">
        <Image
          className="h-72 w-72 "
          source={require("../assets/logo.png")}
        ></Image>
      </View>
      <View className="flex items-center justify-center w-full gap-4">
        <TouchableOpacity
          onPress={startGame}
          className="items-center w-5/6 px-8 py-4 bg-[#5D5D81] rounded-full shadow-xl shadow-black justify-self-end"
        >
          <Text className="text-xl font-medium text-white">
            Jogar - Modo infinito
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled
          onPress={startLevelsGame}
          className="items-center w-5/6 px-8 py-4 bg-[#5D5D81] rounded-full shadow-xl shadow-black justify-self-end"
        >
          <Text className="text-xl font-medium text-white">Jogar - Níveis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled
          className="items-center w-5/6 px-8 py-4 bg-gray-500 rounded-full shadow-xl shadow-black justify-self-end"
        >
          <Text className="text-xl font-medium text-white">
            Configurações (em breve)
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
