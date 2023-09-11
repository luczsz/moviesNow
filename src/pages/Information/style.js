import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#08081d',
    },
    header:{
        backgroundColor: 'green',
        marginTop: 32,

        
    },
    headerInfor:{
        flexDirection: 'row',
        gap: 8,
        marginTop: 10,
    },
    imgBack:{
        width: 420,
        height: 330,

        padding: 14,
    },

    content:{
        flex:1,
        backgroundColor: '#08081d',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,

        padding: 12,
    },

    titulo:{
        fontSize: 22, 
        fontWeight: 'bold',
        color: '#f5f5f5'
    },
    subTitulo:{
        fontSize: 14, 
        color: '#b5b5b5'
    },
    informations:{
        flexDirection: 'row',
        padding: 12,
        marginTop: 10,
        marginBottom: 10,

        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 8,
    },
    line:{
        backgroundColor: 'grey',
        height: 60,
        width: 2,
        borderRadius: 10,
    },

    buttons:{
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',

        paddingLeft: 12,
        paddingRight: 12,
    },

    watch:{
        flexDirection: 'row',
        gap: 9,
        backgroundColor: '#7d4192',
        height: 60,
        width: '100%',
        borderRadius: 12,

        alignItems: 'center',
        justifyContent: 'center',

    },
    watchText:{
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f5f5f5'
    },
})
