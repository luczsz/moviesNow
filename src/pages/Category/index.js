import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { categoria } from '../../components/list';
import { styles } from './style';
import CategoryItem from '../../components/CategoryItem';

export default function Category() {

    return (
   <View style={styles.container} >
        <View style={styles.header}>
            <Text style={styles.title} >CATEGORIAS</Text>
        </View>
        <View style={styles.content} >
            <Text style={styles.title} >CATEGORIAS</Text>
             <FlatList
                data={categoria}
                keyExtractor={ (item) => item.id}
                renderItem={ ({item}) => <CategoryItem data={item} />}
                numColumns={'2'}
            /> 
        </View>
   </View>
  );
}
