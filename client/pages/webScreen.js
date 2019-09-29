import React, { Component } from 'react'
import { View, Text, WebView } from 'react-native'

export default class WebScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link: ''
        }
    }

    static navigationOptions = {
        title: 'WebView'
    }

    componentWillMount = () => {
        this.state.link = JSON.stringify(this.props.navigation.getParam('link'))
    }

    render() {

        const urlLength = JSON.stringify(this.props.navigation.getParam('link')).length
        const uri = JSON.stringify(this.props.navigation.getParam('link')).substring(1, urlLength - 1)

        console.log('made it here')

        return (
            <WebView source={{ uri }} />
            // <WebView source={{ uri: link }} />
            // <WebView style={{width: '100%'}} source={{ uri: link }} /> 
        )
    }
}
