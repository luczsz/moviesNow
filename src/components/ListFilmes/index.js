import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ListFilmes({data, load}) {
 return (
   <TouchableOpacity
        onPress={ () => load(data)}
        style={styles.container}
   >

        <Image source={{ uri: data.logo }} style={styles.img} />
        
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        marginBottom: 10,
        marginRight: 10,

        width: 164,

    },
    img:{
      width: 162,
      height: 233,
      borderRadius: 12,
    },
})
