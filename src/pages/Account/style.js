import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.primary,
        flex: 1,
    },
    header:{
        height: 90,

        alignItems: 'center',
        justifyContent: 'center',
    },

    title:{
        fontSize: 25,
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
    },
    subTitle:{
        fontSize: 14,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        
        marginBottom: 3,
    },

    menu:{
        flex:1,
        alignItems:'center',

        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 20,
    },
    button:{
        backgroundColor: theme.colors.discord,
        borderRadius: 12,
        width: '100%',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9,
        marginBottom: 10,
    },
    buttonText:{
        fontSize: 22,
        fontFamily: theme.fonts.text400,
        color: theme.colors.white90,
    },

    footer:{
        height: 150,
        alignItems: 'center',
        paddingTop: 10,
    }
})
