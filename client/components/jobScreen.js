import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class JobScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static navigationOptions = {
      title: 'JobScreen'
  }

  render() {
      const { navigate } = this.props.navigation
    return (
      <View>
        <Text> jobscreen </Text>
        <Button
        title = 'go to homescreen'
        onPress = {() => navigate('Home', {})}
        />
      </View>
    )
  }
}
