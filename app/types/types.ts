export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  created: string;
  isChecked: boolean;
}

export type FilterText = {
  filteredText: string;
  setFilteredText: (text: string) => void;
};

export type FilteredData = {
  filteredData: Array<Character>;
  setFilteredData: (data: Character[]) => void;
  removeFilteredData: () => void
};

export type ListComponentProps = {
  data: Character;
  //setCheckedText: React.Dispatch<React.SetStateAction<Array<any>>>;
};