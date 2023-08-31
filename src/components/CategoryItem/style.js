import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.secondary,
        marginRight: 12,
        marginBottom: 10,

        width: 180,
        height: 130,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 9,
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: theme.colors.primary,
        textTransform: 'uppercase'
    }
})
