import { ActivityIndicator, FlatList, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListComponent from '../components/ListComponent';
import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../../service/service';
import { Character } from '../../app/types/types';
import { useDataStore, useFilterTextStore, useFilteredDataStore } from '../../app/store';
import MultiSelectItem from '../components/MultiSelectItem';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const MainScreen = () => {
  const { filteredText, setFilteredText } = useFilterTextStore();
  const { filteredData, setFilteredData, removeFilteredData } = useFilteredDataStore();
  const { Data, setData } = useDataStore();
  //const [checkedText, setCheckedText] = useState([]);

  const { data, isLoading }: { data: Character[]; isLoading: boolean } =
        useQuery({
          queryKey: ['characters'],
          queryFn: fetchCharacters,
          select: (data): Character[] => data.map(character => ({ ...character, isChecked: false })),
        });

      useEffect(() => {
        setData(data);
      }, [])
      


  const handleFilter = (text: string) => {
    setFilteredText(text);
    // if (text.trim() === "") {
    //   removeFilteredData();
    // } else {
    //     const checkedData = data.filter((item: Character) => checkedText.includes(item.name));
    //     const filteredData = data.filter((item: Character) => item.name.toLowerCase().includes(text.trim().toLowerCase()));

    //     const uniqueNames = new Set([...checkedData.map(item => item.name), ...filteredData.map(item => item.name)]);

    //     const combinedData = data.filter(item => uniqueNames.has(item.name));

    //     setFilteredData(combinedData);
    // }
  };

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <View className="justify-center w-11/12 mt-4 h-11 border border-slate-500 rounded-xl pl-1">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
           {Data.map((item) => (
               item.isChecked && <MultiSelectItem key={item.id} checkedText={item.name} />
            ))}
            <TextInput
              onChangeText={handleFilter}
              value={filteredText}
              placeholder="Ara..."
              className="pl-2"
            />
          </View>
          <View className="pr-3">
            <FontAwesome5 name="caret-down" size={24} color="#475569" />
          </View>
        </View>
      </View>
      <View className="w-full border border-slate-500 rounded-xl w-11/12 mt-4 bg-slate-50">
        <FlatList
          data={filteredData.length != 0 ? filteredData : Data}
          keyExtractor={(item: Character) => item.id.toString()}
          renderItem={({ item }: { item: Character }) => (
            <View className="border-b border-b-slate-400 pl-2">
              <ListComponent data={item} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
