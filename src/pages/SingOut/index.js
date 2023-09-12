import React, {useState, useContext} from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';


import { styles } from './style';

import { AuthContext } from '../../contexts/auth';

export default function SingOut() {

  const { signUp, loading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');

  function Cadastrar(){
    signUp(nome, email, senha);
  }

 return (
   <KeyboardAvoidingView style={styles.container} >
        
        <View style={styles.content}>
          <View style={styles.inputs}>
              <Feather name='user' size={30} color={'#f5f5f5'} />
              <TextInput
                placeholder='Seu nome...'
                autoCapitalize='none'
                autoCorrect={false}
                value={nome}
                onChangeText={ (text)=> setNome(text)}
                placeholderTextColor={'#b5b5b5'}
                style={{color: '#f5f5f5'}}
              />
          </View>
          <View style={styles.inputs}>
              <Feather name='mail' size={30} color={'#f5f5f5'} />
              <TextInput
                placeholder='Seu email...'
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={ (text)=> setEmail(text)}
                placeholderTextColor={'#b5b5b5'}
                style={{color: '#f5f5f5'}}
              />
          </View>
          <View style={styles.inputs}>
              <Feather name='lock' size={30} color={'#f5f5f5'} />
              <TextInput
                placeholder='Sua senha...'
                autoCapitalize='none'
                secureTextEntry={true}
                autoCorrect={false}
                value={senha}
                onChangeText={ (text)=> setSenha(text)}
                placeholderTextColor={'#b5b5b5'}
                style={{color: '#f5f5f5'}}
              />
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity 
            style={styles.submit}
            activeOpacity={0.9}
            onPress={ () => Cadastrar()}
          >
              {loading ? 
                  
                  <Text style={styles.submitText} >C A D A S T R A R</Text>
                  
                  :

                  <ActivityIndicator
                    size={25}
                    color={'#08081D'}
                  />
              
                }
          </TouchableOpacity>
        </View>

   </KeyboardAvoidingView>
  );
}
