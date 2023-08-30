import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

import FeedFilme from '../../components/FeedFilme';
import { abertos, esportes, desenhos, noticias, filmes } from '../../components/list';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';

export default function Home() {
 return (
   <View style={styles.container} >
        <View style={styles.header}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap: 9, padding: 10, borderWidth: 2, borderRadius: 12, borderColor: 'white'}}>
                <Feather name='search' size={25} color={'#f5f5f5'} />
                <Text style={{color: 'white'}} >
                    Escolha um filme.
                </Text>
            </View>

            <Feather name='settings' size={25} color={'#f5f5f5'} />
        </View>
        <View style={styles.content}>
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title} >Tv Aberta</Text>
            <FeedFilme data={abertos} />
            <Text style={styles.title} >Esportes</Text>
            <FeedFilme data={esportes} />
            <Text style={styles.title} >Desenhos</Text>
            <FeedFilme data={desenhos} />
            <Text style={styles.title} >Noticias</Text>
            <FeedFilme data={noticias} />
            <Text style={styles.title} >Filmes</Text>
            <FeedFilme data={filmes} />
        </ScrollView>

        </View>
   </View>
  );
}
