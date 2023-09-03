import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import * as ScreenOrientation from 'expo-screen-orientation';
import VideoPlayer from 'expo-video-player';
import { ResizeMode } from 'expo-av';

export default function VideoLink({data}) {

    const [isFullScreen, setIsFullScreen] = useState(null);
    const videoRef = useRef(null);



 return (
   <View style={styles.container}>
        <Text> {data} </Text>

        <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: ResizeMode.CONTAIN,
                source:{
                    uri: data
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
            style={{height: 290, width: 1800, }}
        />
   </View>
  );
}


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
