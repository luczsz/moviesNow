import React, {useRef, useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import * as ScreenOrientation from 'expo-screen-orientation';
import VideoPlayer from 'expo-video-player';
import { ResizeMode, Video } from 'expo-av';

export default function Watchs({route}) {

    const { data } = route.params;
    const [isFullScreen, setIsFullScreen] = useState(null);
    const videoRef = useRef(null);
    const date = data.link; 

 return (
    <View style={styles.container}>

        {/* <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: ResizeMode.CONTAIN,
                source:{
                    uri: date,
                },
                ref: videoRef
            }}
            fullscreen={{
                enterFullscreen: async () => {
                    setIsFullScreen(!isFullScreen)
                    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
                    videoRef.current.setStatusAsync({
                        shouldPlay: true,
                    })
                },
                exitFullscreen: async () => {
                    setIsFullScreen(!isFullScreen)
                    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
                    videoRef.current.setStatusAsync({
                        shouldPlay: false,
                    })
                },
                inFullscreen: isFullScreen,
            }}
            style={{height: 290, width: 800, }}
        /> */}
   </View>
  );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#08081D',
        alignItems: 'center',
    }
})
