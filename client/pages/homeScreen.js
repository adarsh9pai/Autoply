import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
      title: 'HomeScreen'
  }

  render() {
      const { navigate } = this.props.navigation
    return (
      <View>
        <Text> homeScreen </Text>
        <Button
        title='go to main screen'
        onPress = {() => navigate('MainScreen', {name: 'Imtiaz'})}
        />
      </View>
    );
  }
}
