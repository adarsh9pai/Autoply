import { StyleSheet } from 'react-native'
import { Purple as Scheme } from './colorThemes'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    googleLoginButton: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    row: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCenter: {
        margin: 15,
        textAlign: "center",
        color: '#454552',
    },
    mediumText: {
        fontSize: 28
    }
})
