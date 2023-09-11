import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';


import { styles } from './style';

export default function SingOut() {
 return (
   <KeyboardAvoidingView style={styles.container} >
        
        <View style={styles.content}>
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
              <Feather name='mail' size={30} color={'#f5f5f5'} />
              <TextInput
                placeholder='Seu email...'
                autoCapitalize='none'
                autoCorrect={false}
                /* value={nome}
                onChangeText={ (text)=> setNome(text)} */
                placeholderTextColor={'#b5b5b5'}
              />
          </View>
          <View style={styles.inputs}>
              <Feather name='lock' size={30} color={'#f5f5f5'} />
              <TextInput
                placeholder='Sua senha...'
                autoCapitalize='none'
                autoCorrect={false}
                /* value={nome}
                onChangeText={ (text)=> setNome(text)} */
                placeholderTextColor={'#b5b5b5'}
              />
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity 
            style={styles.submit}
            activeOpacity={0.9}
          >
              <Text style={styles.submitText} >C A D A S T R A R</Text>
          </TouchableOpacity>
        </View>

   </KeyboardAvoidingView>
  );
}
