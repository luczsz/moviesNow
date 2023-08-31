import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

import { useNavigation } from '@react-navigation/native';

export default function CategoryItem({data}) {

  const navigate = useNavigation();

  function select(name){
    if(name === 'Filmes'){
      navigate.navigate('Filmes');
      return;
    }{
      alert('false');
      return;
    }
  }

 return (
   <TouchableOpacity 
      style={styles.container}
      onPress={ () => select(data.name)}
   >
        <Text style={styles.title} > {data.name} </Text>
   </TouchableOpacity>
  );
}
