import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
    header:{
        marginTop: 32,

        padding: 14,

        borderBottomWidth: 2,
        borderBottomColor: theme.colors.white090,
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
    },

    content:{
        flex:1,
        backgroundColor: 'green',
        padding: 20,
    }
})
