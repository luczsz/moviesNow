import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginTop: 9,
        marginBottom: 9,
        borderRadius: 12,
        padding: 10,
        gap: 8,
    },

    img:{
/*         width: 150,
        height: 250, */
        width: 110,
        height: 110,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.white090
    }
    
})
