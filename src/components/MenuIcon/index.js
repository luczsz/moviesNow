import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default function MenuIcon() {
 return (
   <View style={styles.container} >
        <Feather name='bell' size={28} color={'#f5f5f5'} />
        <Feather name='search' size={28} color={'#f5f5f5'} />
        <Feather name='settings' size={28} color={'#f5f5f5'} />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap: 9,
    }
})
