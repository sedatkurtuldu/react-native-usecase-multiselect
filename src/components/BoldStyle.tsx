import { Text } from 'react-native'
import React from 'react'
import { useFilterTextStore } from '../../app/store';

const BoldStyle = ({ name } : { name: string }) => {
    const { filteredText } = useFilterTextStore();

    const parts = name.split(new RegExp(`(${filteredText})`, 'gi'));
    return (
      <Text>
        {parts.map((part, index) =>
          part.toLowerCase() === filteredText.toLowerCase() ? (
            <Text key={index} className="text-slate-600 font-bold">
              {part}
            </Text>
          ) : (
            <Text className='text-slate-600' key={index}>{part}</Text>
          )
        )}
      </Text>
    );
  };

export default BoldStyle