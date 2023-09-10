import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';

export default function Information({route}) {

  const { data } = route.params;
  const BgImage = data.logo;

 return (
   <View style={styles.container} >
       
        <View style={styles.header} >

            <Feather name='arrow-left-circle' size={34} color={'black'} />

            <View style={styles.headerInfor} >
              <Image
                source={{ uri: BgImage }}
                style={styles.imgBack}
              />
              <View>
                <Text> {data.titulo} </Text>
                <Text> {data.infor} </Text>
              </View>
            </View>
            
        </View>
        
        <View style={styles.content} >  
          <Text> {data.logo} </Text>
        </View>
   </View>
  );
}
