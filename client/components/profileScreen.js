import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class ProfileScreen extends Component {
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
    return (
      <View>
        <Text> profile screen </Text>
        <Button
          title='Logout'
          onPress={() => navigate('Home')}
        />
        {/* <BottomBar /> */}
      </View>
    )
  }
}
