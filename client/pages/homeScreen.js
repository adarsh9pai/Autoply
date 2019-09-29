import React, { Component } from 'react'
import { View, Text, Button, processColor, Image, SafeAreaView } from 'react-native'
import * as Google from 'expo-google-app-auth'
import { GoogleOAuth } from '../secret'
import GoogleButton from '../images/google_button.png'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../styles/styles'
import { SocialIcon } from 'react-native-elements'
import AppLogo from '../images/app_logo.png'


export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      email: "",
      photoUrl: ""
    }
  }

  static navigationOptions = {
      title: 'Login'
  }

  googleSignIn = async () => {
    const { navigate } = this.props.navigation
    try{
      const { type, token, user } = await Google.logInAsync({
        ...GoogleOAuth,
      })

      if(type === 'success')
      {
        this.setState({
          ...user,
          signedIn: true
        })
        navigate('DataEntry', user)
      }
      else
      {
        console.log("Sign-in Failed")
      }
    } catch(e) {
      console.log("error with login: ", e)
    }
  }

  render() {
    const { navigate } = this.props.navigation
    
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={AppLogo}
          resizeMode='contain'
          style={{ height: 150 }} />
        <Text style={[styles.textCenter, styles.mediumText]}> Autoply </Text>
        <SocialIcon
          title="Sign in with Google"
          button
          type='google'
          raised={true}
          onPress={this.googleSignIn}
          style={{width: 200, backgroundColor: '#dd4b39'}}/>
      </SafeAreaView>
    )
  }
}
