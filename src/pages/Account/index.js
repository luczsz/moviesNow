import React, {useContext} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { Feather, Octicons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';
import { theme } from '../../global/theme';


export default function Account() {

     const { user, signOut } = useContext(AuthContext);

     return (
   <View style={styles.container} >
        <View style={styles.header} >
          <Text style={styles.title} >
               {user.nome}
          </Text>
          <Text style={styles.subTitle} >
               {user.email}
          </Text>
          <Text style={styles.subTitle} >
               Conta: Beta teste
          </Text>

        </View>

        <View style={styles.menu} >

          <View style={styles.button}>
               <Feather name='user' size={30} color={theme.colors.white90} />
               <Text style={styles.buttonText}>
                    Seus dados
               </Text>
          </View>

          <View style={styles.button}>
               <Octicons name='feed-discussion' size={30} color={theme.colors.white90} />
               <Text style={styles.buttonText}>
                    Feedback
               </Text>
          </View>
        
        </View>

        <View style={styles.footer} >
          <TouchableOpacity 
               style={{flexDirection: 'row', gap: 4, alignItems: 'center',}} 
               onPress={ () => signOut()}
          >
               <Feather name='log-out' size={30} color={theme.colors.white90} />
               <Text style={styles.buttonText} > S A I R </Text>
          </TouchableOpacity>

        </View>
   </View>  
);
}
