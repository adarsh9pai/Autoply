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
    },
    job_text: {
        fontSize: 50,
        fontWeight: 'bold',
        paddingLeft: '4%',
        top: '70%'
    },
    job_image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
        borderRadius: 20
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    profileText: {
        paddingLeft: 10,
        fontSize: 15,
    },
    profilePicture: {
        marginTop: 15,
        marginLeft: 15
    },
      exampleText: {
        fontSize: 20,
        marginBottom: 20,
        marginHorizontal: 15,
        textAlign: 'center',
      },
      maybeRenderUploading: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
      },
      maybeRenderContainer: {
        borderRadius: 3,
        elevation: 2,
        marginTop: 30,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOpacity: 0.2,
        shadowOffset: {
          height: 4,
          width: 4,
        },
        shadowRadius: 5,
        width: 250,
      },
      maybeRenderImageContainer: {
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        overflow: 'hidden',
      },
      maybeRenderImage: {
        height: 250,
        width: 250,
      },
      maybeRenderImageText: {
        paddingHorizontal: 10,
        paddingVertical: 10,
      }
})
