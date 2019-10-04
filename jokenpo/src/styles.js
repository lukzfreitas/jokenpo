import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: "center"
    },
    button: {
        width: 90
    },
    painelAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    painelResults: {
        alignItems: "center",
        marginTop: 10
    },
    textResult: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    },
    icone: {
        alignItems: "center",
        marginBottom: 20
    },
    textPlayer: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})