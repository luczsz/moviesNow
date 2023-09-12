import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

export default function MenuIcon() {
 return (
   <View style={styles.container} >
        <Feather name='bell' size={28} color={theme.colors.secondary85} />
        <Feather name='search' size={28} color={theme.colors.secondary85} />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        gap: 9,
    }
})
