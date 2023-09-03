import React, {useState, useEffect, useRef} from 'react';
import { View, Text, FlatList, Modal, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { Video, } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';
import VideoPlayer from 'expo-video-player';

import { useNavigation } from '@react-navigation/native';


import { styled, styles } from './style';
import { filmes } from '../../components/fimls';
import MoviesItens from '../../components/MoviesItens';
import VideoLink from '../../components/VideoLink';

import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/theme';


export default function Filmes() {
    
    const [open, setOpen] = useState(false);
    const [wats, setWats] = useState(true);
    const [loading, setLoading] = useState(true);
    const [nome, setNome] = useState();
    const [logo, setLogo] = useState();
    const [link, setLink] = useState();

    const videoRef = useRef(null);
    const [isFullScreen, setIsFullScreen] = useState(true);

    const navigation = useNavigation();

    //const videoStatus = usePlaybackStatus();

    const toggleFullScreen = () => {
      setIsFullScreen(!isFullScreen);
    };

    const lockToLandscape = async () => {
    if (isFullScreen) {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      } else {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      }
      setIsFullScreen(!isFullScreen);
    };
  
    function state(data){
        setNome(data.name);
        setLogo(data.logo);
        setLink(data.link);
        setOpen(true);
    };
    
    
    return (
   <View  style={styles.container}>
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={filmes}
            keyExtractor={ (item) => item.id}
            renderItem={ ({item}) => <MoviesItens data={item} mode={state} /> }
            numColumns={'2'}
        />
  
  
        <Modal 
            visible={open}
            animationType="fade"
            onRequestClose={ () => setOpen(false)}
        >
            <View style={styled.containerModal}>

                <View style={styled.header}>
                    <Feather name='arrow-left' size={34} color={theme.colors.secondary} />
                    <Feather name='heart' size={34} color={theme.colors.secondary} />
                </View>

                <View style={styled.content}>
                    <Image
                        style={styled.img}
                        source={{ uri: logo }}
                    />
                    <Text style={styled.title} >
                        {nome}
                    </Text>


                    <TouchableOpacity
                        style={styled.watch}
                        onPress={ () => navigation.navigate('Testes', { dados: link }) }
                    >
                        <Text style={styled.watchText} >a s s i t i r</Text>
                    </TouchableOpacity>
                </View>
                
                    
            </View>

        </Modal>
  
   </View>

  );
}
