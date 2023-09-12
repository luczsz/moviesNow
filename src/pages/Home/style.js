import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        backgroundColor: theme.colors.primary,
        flex: 1,
        padding: 14,

        alignItems: 'center',
        justifyContent: 'center',
    },
})
