import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import { useQuery } from "@tanstack/react-query";
import { fetchEpisodeCount } from "../../service/service";
import { ListComponentProps } from "../../app/types/types";
import BoldStyle from "./BoldStyle";
import { useDataStore } from "../../app/store";

const ListComponent = ({ data } : ListComponentProps) => {
  const { Data, setData } = useDataStore();

  const { data: episodeCount } : { data: number } = useQuery({
    queryKey: ['epsiodeCount', data.id],
    queryFn: () => fetchEpisodeCount(data.id)
  });
  
  const handleIsChecked = () => {
    const updatedData = Data.map(item => item.name === data.name ? { ...item, isChecked: !item.isChecked } : item);
    
    setData(updatedData);
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handleIsChecked} className="flex-row h-20 items-center gap-2">
      <View>
        <Checkbox color={data.isChecked ? "#0075FF" : ""} value={data.isChecked} onValueChange={handleIsChecked} />
      </View>
      <View>
        <Image className="w-12 h-12 rounded-lg" source={{ uri: data.image }} />
      </View>
      <View>
        <BoldStyle name={data.name} />
        <Text className='text-slate-600'>{episodeCount > 1 ? `${episodeCount} Episodes` : `${episodeCount} Episode`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListComponent;
