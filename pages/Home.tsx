import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function startGame() {
    navigation.navigate("Quiz");
  }

  return (
    <View className="flex items-center h-full pb-10 bg-gray-800 pt-14">
      <Text className="text-xl text-white">Geormat</Text>
      <TouchableOpacity
        onPress={startGame}
        className="items-center w-5/6 px-8 py-4 mt-12 bg-red-500 rounded-full shadow-xl shadow-black"
      >
        <Text className="text-xl font-medium text-white">Iniciar jogo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
