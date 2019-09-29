import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux'


class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static navigationOptions = {
    title: 'ProfileScreen'
  }

  render() {
    const { navigate } = this.props.navigation
    const { user } = this.props
    console.log(user)
    return (
      <View>
        <Avatar
          rounded
          source={{ uri: user.photoUrl }}
        />
        <Text>{user.name}</Text>

        <Text>{user.email}</Text>

        <Text>{user.jobApplicationLocation}</Text>

        {
          user.urlGithub.length ?
            <Text onPress={() => {
              link = user.urlGithub
              this.props.navigation.navigate('WebView', link)
            }} >Github</Text>
            :
            <View />

        }{
          user.urlLinkedin.length ?
            <Text onPress={() => {
              link = user.urlLinkedin
              this.props.navigation.navigate('WebView', link)
            }} >Linkedin</Text>
            :
            <View />

        }{
          user.urlPortfolio.length ?
            <Text onPress={() => {
              link = user.urlPorfolio
              this.props.navigation.navigate('WebView', link)
            }} >Porfolio</Text>
            :
            <View />

        }

        <Button
          title='Logout'
          onPress={() => navigate('Home')}
        />
      </View>
    )
  }
}


const maptStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(maptStateToProps)(ProfileScreen);
