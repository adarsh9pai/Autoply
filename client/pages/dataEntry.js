import React, { Component } from 'react'
import { ScrollView, Button, TextInput, Text, KeyboardAvoidingView } from 'react-native'
import { styles } from '../styles/styles'
import { Purple as Theme } from '../styles/colorThemes'
import { Avatar } from 'react-native-elements'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default class DataEntry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            universityName: '',
            jobApplicationLocation: '',
            urlGithub: '',
            urlLinkedin: '',
            urlTwitter: '',
            urlPortfolio: '',
        },
            this.handleUniversityChange = this.handleUniversityChange.bind(this)
        this.handleJobAppChange = this.handleJobAppChange.bind(this)
        this.handleurlGithubChange = this.handleurlGithubChange.bind(this)
        this.handleurlLinkedChange = this.handleurlLinkedChange.bind(this)
        this.handleTwitterChange = this.handleTwitterChange.bind(this)
        this.handlePortfolioChange = this.handlePortfolioChange.bind(this)
    }

    handleUniversityChange = (universityName) => {
        this.setState({ universityName })
    }

    handleJobAppChange = (jobApplicationLocation) => {
        this.setState({ jobApplicationLocation })
    }

    handleurlGithubChange = (urlGithub) => {
        this.setState({ urlGithub })
    }

    handleurlLinkedChange = (urlLinkedin) => {
        this.setState({ urlLinkedin })
    }

    handleTwitterChange = (urlTwitter) => {
        this.setState({ urlTwitter })
    }

    handlePortfolioChange = (urlPortfolio) => {
        this.setState({ urlPortfolio })
    }

    onSubmit = e => {
        const { navigate } = this.props.navigation
        const email = JSON.stringify(this.props.navigation.getParam('email'))
        const name = JSON.stringify(this.props.navigation.getParam('name'))
        const urlLength = JSON.stringify(this.props.navigation.getParam('photoUrl')).length
        const photoUrl = JSON.stringify(this.props.navigation.getParam('photoUrl')).substring(1, urlLength - 1)
        const idLength = JSON.stringify(this.props.navigation.getParam('id')).length
        const id = JSON.stringify(this.props.navigation.getParam('id')).substring(1, idLength - 1)
        console.log(id)
        
        const user = {
            ...this.state,
            email,
            name,
            photoUrl,
            id,

        }
        // console.log(user)
        navigate('Resume', user)
    }

    render() {

        const urlLength = JSON.stringify(this.props.navigation.getParam('photoUrl')).length
        const photoUrl = JSON.stringify(this.props.navigation.getParam('photoUrl')).substring(1, urlLength - 1)
        const nameLength = JSON.stringify(this.props.navigation.getParam('name')).length
        const name = JSON.stringify(this.props.navigation.getParam('name')).substring(1, nameLength - 1)
        const emailLength = JSON.stringify(this.props.navigation.getParam('email')).length
        const email = JSON.stringify(this.props.navigation.getParam('email')).substring(1, emailLength - 1)

        console.log(this.props)


        return (
            <KeyboardAvoidingView enabled>

                <Avatar
                    size="large"
                    containerStyle={styles.profilePicture}
                    rounded
                    source={{ uri: photoUrl }}
                />

                <Text
                    style={styles.profileText}
                >
                    {name}
                </Text>
                <Text
                    style={styles.profileText}
                >
                    {email}
                </Text>

                <TextInput
                    style={styles.textInput}
                    placeholder='your university'
                    maxLength={100}
                    value={this.state.universityName}
                    onChangeText={this.handleUniversityChange}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='your location'
                    maxLength={100}
                    value={this.state.jobApplicationLocation}
                    onChangeText={this.handleJobAppChange}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Github URL'
                    maxLength={100}
                    value={this.state.urlGithub}
                    onChangeText={this.handleurlGithubChange}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Linkedin URL'
                    maxLength={100}
                    value={this.state.urlLinkedin}
                    onChangeText={this.handleurlLinkedChange}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Twitter URL'
                    maxLength={100}
                    value={this.state.urlTwitter}
                    onChangeText={this.handleTwitterChange}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Personal Portfolio'
                    maxLength={100}
                    value={this.state.urlPortfolio}
                    onChangeText={this.handlePortfolioChange}
                    autoFocus={true}
                />
                <Button
                    title='Submit'
                    onPress={this.onSubmit}
                />

            </KeyboardAvoidingView>

        )
    }
}
