import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { Feather, AntDesign } from '@expo/vector-icons';

export default function Information({route}) {

  const { data } = route.params;
  const BgImage = data.logo;
  const navigation = useNavigation();

 return (
   <View style={styles.container} >
       
        <View style={styles.header} >

        <ImageBackground
              source={{uri: BgImage}}
              style={styles.imgBack}
            >
               <Feather name='arrow-left-circle' size={40} color={'#f5f5f5'} />
        </ImageBackground>
            
            
        </View>
        
        <View style={styles.content} >

          <Text style={styles.titulo} > {data.titulo} </Text>
          <View style={{flexDirection: 'row', gap: 8, alignItems: 'center',justifyContent: 'space-between', paddingLeft: 8, paddingTop: 5,}} >
            <Text style={styles.subTitulo} >2019</Text>
              <View style={{flexDirection: 'row'}}>
                  <AntDesign name='star' size={20} color={'#f5f5f5'} />
                  <AntDesign name='star' size={20} color={'#f5f5f5'} />
                  <AntDesign name='star' size={20} color={'#f5f5f5'} />
                  <AntDesign name='staro' size={20} color={'#f5f5f5'} />

              </View>
          </View>

          <View style={styles.informations}>
            <Text style={styles.subTitulo} > 149 minutos </Text>

            <View style={styles.line} ></View>
            
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} >
              <Feather name='bookmark' size={40} color={'#f5f5f5'} />
              <Text style={styles.subTitulo} >Add a lista</Text>

            </View>
            
            <View style={styles.line} ></View>
            
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap:8,}} >
              <Feather name='share-2' size={40} color={'#f5f5f5'} />
              <Text style={styles.subTitulo} >Add a lista</Text>

            </View>

          </View>

          <View style={styles.buttons}>
            
            <TouchableOpacity style={styles.watch} onPress={ () => navigation.navigate('Assistir', {data})} >
                <AntDesign name='play' size={30} color={'#f5f5f5'} />
              <Text style={styles.watchText} >ASSISTIR AGORA</Text>
            </TouchableOpacity>
          
          </View>

          <View>
            <Text style={styles.titulo} >Descrição...</Text>
            <Text style={styles.subTitulo} >
              {data.infor}
            </Text>
          </View>

          
        </View>
   </View>
  );
}
