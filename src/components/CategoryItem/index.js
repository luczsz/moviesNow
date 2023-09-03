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
      if(name == 'Teste'){
        navigate.navigate('Testes');
        return;
      }{
        alert('Não é');
        return;
      }
      alert('Não é1');
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
