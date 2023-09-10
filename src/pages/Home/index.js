import React, {useEffect, useState} from 'react';
import { View, Text , FlatList} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import ListFilmes from '../../components/ListFilmes';

// base de dados
import firebaseConfig from '../../services/firebaseConnection';
import { getDatabase, ref, set, onValue } from 'firebase/database'; 


export default function Home() {

    const navigate = useNavigation();
    const [filmes, setFilmes] =useState([]);

    useEffect( () => {
        async function loadFilmes(){
            const database = getDatabase(firebaseConfig);
            const filmsList = ref(database, '/filmes');

            onValue(filmsList, (snap) => {
                setFilmes([]);

                snap.forEach( (item) => {
                    const dados = {
                        key: item.key,
                        id: item.val().id,
                        titulo: item.val().titulo,
                        logo: item.val().logo,
                        infor: item.val().infor,
                        link: item.val().link,
                    };

                    setFilmes( oldArray => [...oldArray, dados]);
                    console.log(dados);
                })
            })
        };
        loadFilmes();
    },[]);

    function gettingDados(data){
        navigate.navigate('Informações', {data});
    }

 return (
   <View style={styles.container}>
        <View style={styles.content}>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={filmes}
                numColumns={2}
                keyExtractor={(item) => item.key}
                renderItem={ ({item}) => <ListFilmes data={item} load={gettingDados} />}
            />

        </View>
   </View>
  );
}
