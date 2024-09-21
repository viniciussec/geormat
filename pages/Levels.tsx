import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View, Image, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function startGame() {
    navigation.navigate("Quiz");
  }

  const levels = ["Nível 1", "Nível 2", "Nível 3", "Nível 4", "Nível 5"];

  return (
    <View className="flex items-center h-full pb-10 bg-gray-800 pt-14">
      <View className="flex items-center justify-center w-full gap-4">
        <View className="items-start w-5/6">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="flex items-center justify-center px-2 py-2 bg-red-500 rounded-full w-14 h-14"
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <FlatList
          className="w-full h-full p-4"
          data={levels}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item}
              onPress={startGame}
              className="items-center self-center w-5/6 px-8 py-4 bg-[#5D5D81] rounded-full justify-self-end"
            >
              <Text className="text-xl font-medium text-white">{item}</Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
