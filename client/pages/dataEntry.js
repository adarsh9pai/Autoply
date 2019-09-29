import React, { Component } from 'react'
import { View, Button, TextInput, Text } from 'react-native'
import { styles } from '../styles/styles'
import { Avatar } from 'react-native-elements'


export default class DataEntry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            jobApplicationLocation: '',
            urlGithub: '',
            urlLinkedin: '',
            urlTwitter: '',
            urlPortfolio: '',
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleJobAppChange = this.handleJobAppChange.bind(this)
        this.handleurlGithubChange = this.handleurlGithubChange.bind(this)
        this.handleurlLinkedChange = this.handleurlLinkedChange.bind(this)
        this.handleTwitterChange = this.handleTwitterChange.bind(this)
        this.handlePortfolioChange = this.handlePortfolioChange.bind(this)

    }

    handleNameChange = (name) => {
        this.setState({ name })
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
        const email = JSON.stringify(this.props.navigation.getParam('email'))
        const name = JSON.stringify(this.props.navigation.getParam('name'))
        const urlLength = JSON.stringify(this.props.navigation.getParam('photoUrl')).length
        const photoUrl = JSON.stringify(this.props.navigation.getParam('photoUrl')).substring(1, urlLength - 1)
        console.log(newUrl)

        const id = JSON.stringify(this.props.navigation.getParam('id'))
        const user = {
            ...this.state,
            email,
            name,
            photoUrl,
            id,

        }
    }

    render() {

        const urlLength = JSON.stringify(this.props.navigation.getParam('photoUrl')).length
        const photoUrl = JSON.stringify(this.props.navigation.getParam('photoUrl')).substring(1, urlLength - 1)

        return (
            <View>
                <Avatar
                    rounded
                    source={{ uri: photoUrl }}
                />

                <Text>
                    {JSON.stringify(this.props.navigation.getParam('name'))}
                </Text>
                <Text>
                    {JSON.stringify(this.props.navigation.getParam('email'))}
                </Text>

                <TextInput
                    style={styles.textInput}
                    placeholder='your university'
                    maxLength={20}
                    value={this.state.name}
                    onChangeText={this.handleNameChange}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='your location'
                    maxLength={20}
                    value={this.state.jobApplicationLocation}
                    onChangeText={this.handleJobAppChange}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Github URL'
                    maxLength={20}
                    value={this.state.urlGithub}
                    onChangeText={this.handleurlGithubChange}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Linkedin URL'
                    maxLength={20}
                    value={this.state.urlLinkedin}
                    onChangeText={this.handleurlLinkedChange}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Twitter URL'
                    maxLength={20}
                    value={this.state.urlTwitter}
                    onChangeText={this.handleTwitterChange}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Personal Portfolio'
                    maxLength={20}
                    value={this.state.urlPortfolio}
                    onChangeText={this.handlePortfolioChange}
                />
                <Button
                    title='Submit'
                    onPress={this.onSubmit}
                />
            </View>
        )
    }
}
