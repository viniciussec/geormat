import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View className="flex items-center justify-between h-full pb-10 bg-gray-800 pt-14">
      <Text className="text-lg text-white">Que país é este?</Text>
      <View className="flex-1 w-5/6 my-6 bg-gray-500 rounded-md shadow-lg shadow-black"></View>
      <View className="flex flex-col items-center justify-center w-full gap-4">
        <TouchableOpacity className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black">
          <Text className="text-xl font-medium text-white">Brazil</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black">
          <Text className="text-xl font-medium text-white">Russia</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black">
          <Text className="text-xl font-medium text-white">China</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center w-5/6 px-8 py-4 bg-red-500 rounded-full shadow-xl shadow-black">
          <Text className="text-xl font-medium text-white">India</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
