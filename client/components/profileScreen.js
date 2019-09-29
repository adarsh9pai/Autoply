import React, { Component } from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import { styles } from '../styles/styles'
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux'


// class ProfileScreen extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }

//   static navigationOptions = {
//     title: 'ProfileScreen'
//   }

//   render() {
//     const { navigate } = this.props.navigation
//     const { user } = this.props
//     console.log(user)
//     return (
//       <Grid>
//         <Row>
//           <Col size={1}>
//             <Avatar
//               size="large"
//               rounded
//               containerStyle={styles.profilePicture}
//               source={{ uri: user.photoUrl }}
//             />
//           </Col>
//           <Col size={2} style={{ marginTop: 15 }}>
//             <Text style={styles.profileText}>{user.name}</Text>

//             <Text style={styles.profileText}>{user.email}</Text>

//             <Text style={styles.profileText}>{user.jobApplicationLocation}</Text>
//           </Col>
//         </Row>
//         <Row>
//           {
//             user.urlGithub.length ?
//               <Col>
//                 <Button
//                   title='Github'
//                   onPress={() => {
//                     link = user.urlGithub
//                     this.props.navigation.navigate('WebView', link)
//                   }} />
//               </Col>
//               :
//               <View />
//           }{
//             user.urlLinkedin.length ?
//               <Col>
//                 <Button
//                   title='Linkedin'
//                   onPress={() => {
//                     link = user.urlLinkedin
//                     this.props.navigation.navigate('WebView', link)
//                   }} />
//               </Col>
//               :
//               <View />
//           }{
//             user.urlPortfolio.length ?
//               <Col>
//                 <Button
//                   title='Portfolio'
//                   onPress={() => {
//                     link = user.urlPorfolio
//                     this.props.navigation.navigate('WebView', link)
//                   }} />
//               </Col>
//               :
//               <View />
//           }
//         </Row>
//         <Row>
//           <Button
//             title='Logout'
//             onPress={() => navigate('Home')}
//           />
//         </Row>
//       </Grid>
//     )
//   }
// }


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
        <TextInput
          style={styles.textInput}
          maxLength={100}
          value="Github"
          editable={false}
        />
        <TextInput
          style={styles.textInput}
          maxLength={100}
          value="Linkedin"
          editable={false}
        />
        <TextInput
          style={styles.textInput}
          maxLength={100}
          value="Twitter"
          editable={false}
        />
        <TextInput
          style={styles.textInput}
          maxLength={100}
          value="Portfolio"
          editable={false}
        />
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
