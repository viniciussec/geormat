import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function startGame() {
    navigation.navigate("Quiz");
  }

  return (
    <View className="flex items-center h-full pb-10 bg-gray-800 pt-14">
      <View className="flex items-center justify-center flex-1">
        <View className="flex flex-row items-center text-2xl text-white">
          <Text className="text-4xl text-green-500">Geo</Text>
          <Text className="text-4xl text-white">rmat</Text>
        </View>
        <MaterialCommunityIcons name="map-legend" size={40} color={"rgb(34 197 94)"} />
      </View>
      <View className="flex items-center justify-center w-full gap-4">
        <TouchableOpacity
          onPress={startGame}
          className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black justify-self-end"
        >
          <Text className="text-xl font-medium text-white">Iniciar jogo</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black justify-self-end">
          <Text className="text-xl font-medium text-white">Configurações</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
