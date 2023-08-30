import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.primary,
    },

    header:{
        marginTop: 32,
        flexDirection: 'row',
        gap: 10,
        
        
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
    },

    content:{ 
        flex: 1,

        padding: 14,
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.white090,
    }
})
