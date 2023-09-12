import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#08081D',       

        padding: 14,
    },

    content:{
        flex: 1,
    },

    inputs:{
        flexDirection:'row',
        alignItems: 'center',
        gap: 10,

        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#f5f5f5',

        padding: 10,
        marginBottom: 10,
    },

    buttons:{
        height: 120,

        alignItems: 'center',
        justifyContent: 'center',
    },

    submit:{
        backgroundColor: '#f5f5f5',
        width: '80%',
        height: 60,
        borderRadius: 12,

        alignItems: 'center',
        justifyContent: 'center',
    },
    submitText:{
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: theme.fonts.title700,
        color: '#08081D',
    }

})
