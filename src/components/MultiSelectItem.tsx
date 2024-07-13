import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useDataStore } from "../../app/store";

const MultiSelectItem = ({ checkedText } : { checkedText: string }) => {

  const { Data, setData } = useDataStore();

  const removeSelectedItem = () => {

    const updatedData = Data.map(item => item.name === checkedText ? { ...item, isChecked: !item.isChecked } : item );

    setData(updatedData);
  }

  return (
    <View className="bg-slate-200 p-1.5 rounded-lg mr-1">
      <View className="flex-row items-center justify-center gap-x-1">
        <Text className="text-slate-700">{checkedText}</Text>
        <TouchableOpacity onPress={removeSelectedItem} activeOpacity={0.8} className="bg-slate-400 rounded p-0.5">
          <Entypo name="cross" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MultiSelectItem;
