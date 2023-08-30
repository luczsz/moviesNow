import React from 'react';
import { View, Text, FlatList , Image, TouchableOpacity} from 'react-native';
import { styles } from './style';

export default function FeedFilme({data}) {
 return (
   <View>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            keyExtractor={ (item) => item.id}
            renderItem={ ({item}) => 
            <TouchableOpacity style={styles.container} >
                <Image source={{ uri: item.Imagem }} style={styles.img} />
                <Text  style={styles.title} > {item.Name} </Text>
            </TouchableOpacity>  }
        />
   </View>

  );
}
