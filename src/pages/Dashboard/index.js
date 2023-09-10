import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';

import { styles } from './style';

//base de dados 
import firebaseConfig from '../../services/firebaseConnection';
import { getDatabase, ref, set, onValue } from 'firebase/database';


export default function Dashboard() {
    
    const [filmes, setFilmes] = useState([]);
    
    useEffect( () => {
        async function loadDados(){
            const database = getDatabase(firebaseConfig);
            const filmes = ref(database, '/filmes');
    
            onValue(filmes, (snap) => {
                setList([]);
    
                snap.forEach( (item) =>{
                    const date = {
                        key: item.key,
                        id: item.val().id,
                        titulo: item.val().titulo,
                        logo: item.val().logo,
                        infor: item.val().infor,
                        link: item.val().link,
                    };
    
                    setList( oldArray => [...oldArray, date].reverse());
                    console.log(list);
                })
            })
        }
        loadDados();
    },[])

 return (
   <View style={styles.container} >
        <View style={styles.header}>

            <Text>
                imte 3
            </Text>
        </View>
        <View style={styles.content}>
        <FlatList
            data={filmes}
            keyExtractor={ (item) => item.id}
            renderItem={ ({item}) => <Text>item</Text>  }
        />
            <Text>UM DOIS</Text>
        </View>
   </View>
  );
}
