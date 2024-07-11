import { create } from 'zustand';
import { Character, FilterText, FilteredData } from './types/types';

export const useFilterTextStore = create<FilterText>((set) => ({
    filteredText: '',
    setFilteredText: (text: string) => set({ filteredText: text }),
}));

export const useFilteredDataStore = create<FilteredData>((set) => ({
    filteredData: [],
    setFilteredData: (data: Character[]) => set({ filteredData: data }),
    removeFilteredData: () => set({ filteredData: []})
}));

export const useDataStore = create<{ Data: Character[], setData: (Data: Character[]) => void }>((set) => ({
    Data: [],
    setData: (Data: Character[]) => set({ Data }),
}));

export const useIsCheckedStore = create<{ isChecked: boolean, setIsChecked: (isChecked: boolean) => void }>((set) => ({
    isChecked: false,
    setIsChecked: (isChecked) => set({ isChecked }),
}));
