import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 14,
    },
    
})

export const styled = StyleSheet.create({
    containerModal:{
        flex:1,
        
    },

    header:{
        height: 60,

        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 14,
        paddingLeft: 14,

        flexDirection: 'row',
    },

    content:{
        marginTop: 7,
    },

    img:{
        width: '100%',
        height: 290,
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.secondary,
        paddingLeft: 8,
        marginTop: 10,
        marginBottom: 10,
    },

    watch:{
        backgroundColor: theme.colors.secondary,
        marginLeft: 14,
        marginRight: 14,
        height: 50,

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
    },

    watchText:{
        fontSize:22, 
        fontWeight: 'bold',
        color: theme.colors.primary,
        textTransform: 'uppercase'
    },

    video:{
        flex: 1,

        alignItems:'center',
        paddingTop: 20,
        backgroundColor: 'red',

    },

    videos: {
        width: Dimensions.get('window').width,
        height: 200,
      },
      fullScreenVideo: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      fullScreenButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
      },
})
