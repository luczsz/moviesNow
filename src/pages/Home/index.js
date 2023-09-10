import React, {useEffect} from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

import FeedFilme from '../../components/FeedFilme';
import { abertos, esportes, desenhos, noticias, filmes } from '../../components/list';
import { api } from '../../services/api';

import { styles } from './style';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';

export default function Home() {

    useEffect(() => {
        api.get()
          .then(response => {
            if (response.status === 200) {
              const m3uData = response.data;
              const lines = m3uData.split('\n');
              const filmes = [];
              let filmesContados = 0; // Variável para contar o número de filmes adicionados
      
              for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
      
                if (line.startsWith('#EXTINF:')) {
                  const info = line.split(',');
                  const nomeDoFilme = info[1];
      
                  if (lines[i + 1]) {
                    const urlDaMidia = lines[i + 1];
                    filmes.push({
                    
                      nome: nomeDoFilme,
                      url: urlDaMidia,
                    });
      
                    filmesContados++; // Incrementa o contador de filmes adicionados
      
                    if (filmesContados === 120) {
                      // Sai do loop quando 30 filmes foram adicionados
                      break;
                    }
                  }
                }
              }
      
              console.log(filmes);
            } else {
              console.error('Erro de status HTTP:', response.status);
            }
          })
          .catch(error => {
            console.error('Erro na solicitação:', error);
          });
      }, []);
      
      
      

 return (
   <View style={styles.container} >
        <View style={styles.header}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', gap: 9, padding: 10, borderWidth: 2, borderRadius: 12, borderColor: theme.colors.white090}}>
                <Feather name='search' size={25} color={theme.colors.white090} />
                <Text style={{color: theme.colors.white090}} >
                    Escolha um filme.
                </Text>
            </View>

            <Feather name='settings' size={25} color={theme.colors.white090} />
        </View>

        <View style={styles.content}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title} >Tv Aberta 2</Text>
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
