import React, {useState, useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native';

import { styles } from '../SingOut/style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

import { useNavigation } from '@react-navigation/native';
import { AuthContext} from '../../contexts/auth';


export default function SingIn() {
    
    const { signIn, loading } = useContext(AuthContext);
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function Logar(){
        if(email == ''){
          alert('sem dados');
          return;
        }{
          if(senha == ''){
            alert('sem dados')
            return; 
          }{
            signIn(email, senha);
    
          }
        }
      }
    
return (
   <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.inputs}>
                <Feather name='mail' size={30} color={'#f5f5f5'} />
                <TextInput
                placeholder='Seu email...'
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={ (text)=> setEmail(text)}
                placeholderTextColor={'#b5b5b5'}
                style={{color: 'white'}}
              />
            </View>
            <View style={styles.inputs}>
                <Feather name='lock' size={30} color={'#f5f5f5'} />
                <TextInput
                placeholder='Sua senha...'
                autoCapitalize='none'
                keyboardType={'numeric'}
                secureTextEntry={true}
                autoCorrect={false}
                value={senha}
                onChangeText={ (text)=> setSenha(text)}
                placeholderTextColor={'#b5b5b5'}
                style={{color: 'white'}}
              />
            </View>
            <Text style={{color: '#f5f5f5', fontSize: 16, fontFamily: theme.fonts.title700,}} >
                Esqueci a senha
            </Text>
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity
                style={styles.submit}
                activeOpacity={0.9}
                onPress={ () => Logar(email,senha)}
            >
                {loading ? 
                  
                  <Text style={styles.submitText}>
                      E N T R A R
                  </Text>
                  
                  :

                  <ActivityIndicator
                    size={25}
                    color={theme.colors.primary}
                  />
              
                }
               
               
               
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10, gap: 9,}}>
                <Text style={{color: '#f5f5f5', fontSize: 16, fontFamily: theme.fonts.text400}} >Ainda não tem uma conta?</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={ () => navigation.navigate('Cadastro')} >
                    <Text style={{color: '#f5f5f5', fontSize: 16, fontFamily: theme.fonts.title700}}>
                        C A D A S T R E -  S E 
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
   </View>
  );
}
