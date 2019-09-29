import React, { Component } from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import { styles } from '../styles/styles'
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux'


class ProfileScreen extends Component {

  render() {

    const { user } = this.props

    return (
      <View>
        <Avatar
          size="xlarge"
          containerStyle={styles.profilePicture}
          rounded
          source={{ uri: user.photoUrl }}
        />

        <Text
          style={styles.profileText}
        >
          {user.name}
        </Text>
        <Text
          style={styles.profileText}
        >
          {user.email}
        </Text>

        <TextInput
          style={styles.textInput}
          maxLength={100}
          value={user.universityName}
          editable={false}
        />
        <TextInput
          style={styles.textInput}
          maxLength={100}
          value={user.jobApplicationLocation}
          editable={false}
        />

        {
          user.urlGithub.length ?

            <TextInput
              style={styles.textInput}
              maxLength={100}
              value="Github"
              editable={false}
            />

            :
            <View />
        }{
          user.urlLinkedin.length ?

            <TextInput
              style={styles.textInput}
              maxLength={100}
              value="Linkedin"
              editable={false}
            />

            :
            <View />
        }{
          user.urlPortfolio.length ?

            <TextInput
              style={styles.textInput}
              maxLength={100}
              value="Portfolio"
              editable={false}
            />

            :
            <View />
        }

        <Button
          title='Edit'
          onPress={this.onSubmit}
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

export default connect(maptStateToProps)(ProfileScreen)
