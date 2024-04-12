import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

export default function AppModal({
  isVisible,
  points,
  onConfirm
}: {
  isVisible: boolean;
  points: number;
  onConfirm?: () => void;
}) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  function onExit() {
    navigation.navigate("Home");
  }

  return (
    <Modal isVisible={isVisible}>
      <View className="items-center self-center justify-center w-full bg-gray-800 rounded-lg h-1/2">
        <Text className="px-2 py-2 text-xl text-white bg-red-500 rounded-md">
          Você perdeu!
        </Text>
        <Text className="mt-2 text-lg text-white">Pontuação: {points}</Text>
        <TouchableOpacity
          onPress={onConfirm}
          className="items-center justify-center px-8 py-4 mt-10 bg-green-700 rounded-full shadow-xl shadow-black"
        >
          <Text className="text-xl text-white">Jogar novamente</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onExit}
          className="items-center justify-center px-8 py-4 mt-4 bg-red-500 rounded-full shadow-xl shadow-black"
        >
          <Text className="text-xl text-white">Voltar ao menu principal</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
