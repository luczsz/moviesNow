import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../global/theme';

export default function MoviesItens({data, mode}) {
 return (
   <TouchableOpacity 
    style={styles.container}
    onPress={ () => mode(data)}
   >
        <Image
          style={styles.img}
          source={{ uri: data.logo }}
        />
        <Text numberOfLines={1} style={styles.title} > {data.name} </Text>
   </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container:{
      width: '49%',
      gap: 6,
      backgroundColor: theme.colors.secondary,
      marginBottom: 8,
      marginRight: 8,
      
      paddingBottom: 8,

      borderRadius: 12,

  },
  img:{
    width: 'auto',
    height: 280,

    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  title:{
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 8,
    color: theme.colors.primary,
  }
})
