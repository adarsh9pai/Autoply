import { StyleSheet } from 'react-native'
import { Purple as Scheme } from './colorThemes'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    job_card:{
        height: '55%',
        width: '92%',
        borderRadius: 20,
        padding: 0,
        margin: '4%',
    },
    job_card_image: {
        height: '55%',
        width: '100%',
    },
    job_card_company:{
        paddingLeft: '6%',
        paddingTop: '90%',
        fontSize: 40
    }
})
