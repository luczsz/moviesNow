import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';


import { styles } from './style';

export default function SingOut() {
 return (
   <View style={styles.container} >
        <View style={styles.inputs}>
            <Feather name='user' size={30} color={'#f5f5f5'} />
            <TextInput
              placeholder='Seu nome...'
              autoCapitalize='none'
              autoCorrect={false}
              /* value={nome}
              onChangeText={ (text)=> setNome(text)} */
              placeholderTextColor={'#b5b5b5'}
            />
        </View>
        <View style={styles.inputs}>
            <Feather name='user' size={30} color={'#f5f5f5'} />
            <TextInput
              placeholder='Seu nome...'
              autoCapitalize='none'
              autoCorrect={false}
              /* value={nome}
              onChangeText={ (text)=> setNome(text)} */
              placeholderTextColor={'#b5b5b5'}
            />
        </View>
        <View style={styles.inputs}>
            <Feather name='user' size={30} color={'#f5f5f5'} />
            <TextInput
              placeholder='Seu nome...'
              autoCapitalize='none'
              autoCorrect={false}
              /* value={nome}
              onChangeText={ (text)=> setNome(text)} */
              placeholderTextColor={'#b5b5b5'}
            />
        </View>
   </View>
  );
}
