import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header:{
        backgroundColor: 'green',
        marginTop: 32,

        padding: 12,
    },
    headerInfor:{
        flexDirection: 'row',
        gap: 8,
        marginTop: 10,
    },
    imgBack:{
        width: 184,
        height: 283,
        borderRadius: 12,
    },

    content:{
        flex:1,
        backgroundColor: 'grey',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    }
})
