import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function CategoryItem({data}) {
 return (
   <TouchableOpacity style={styles.container}>
        <Text style={styles.title} > {data.name} </Text>
   </TouchableOpacity>
  );
}
