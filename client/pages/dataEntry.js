import React, { Component } from 'react'
import {
    Button,
    TextInput,
    Text,
    KeyboardAvoidingView,
    View,
    StyleSheet,
    ActivityIndicator,
    ScrollView
} from 'react-native'
import { styles } from '../styles/styles'
import { Black as Theme } from '../styles/colorThemes'
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { AddUser } from '../redux/rootAction'


class DataEntry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            school: 'The School of Hard Knocks',
            job_application_location: 'California',
            url_github: 'www.github.com',
            url_linkedin: 'www.linkedin.com',
            phone: '218563565',
            url_portfolio: 'google.com',
            f1_j1_visa: 'y',
            us_citizenship: 'n',
            primary_language: 'Cpp',
            current_company: 'UTA',
            favorite_tool: 'Cpp',
            country_of_residence: 'Africa',

        },
            this.handleUniversityChange = this.handleUniversityChange.bind(this)
        this.handleJobAppChange = this.handleJobAppChange.bind(this)
        this.handleurlGithubChange = this.handleurlGithubChange.bind(this)
        this.handleurlLinkedChange = this.handleurlLinkedChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handlePortfolioChange = this.handlePortfolioChange.bind(this)
        this.handleF1J1Change = this.handleF1J1Change.bind(this)
        this.handleUSCitiChange = this.handleUSCitiChange.bind(this)
        this.handleurlPLChange = this.handleurlPLChange.bind(this)
        this.handleurlCurrCompChange = this.handleurlCurrCompChange.bind(this)
        this.handleFavToolChange = this.handleFavToolChange.bind(this)
        this.handleCountryOfResChange = this.handleCountryOfResChange.bind(this)
    }

    handleUniversityChange = (School) => {
        this.setState({ School })
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

    handlePhoneChange = (phone) => {
        this.setState({ phone })
    }

    handlePortfolioChange = (urlPortfolio) => {
        this.setState({ urlPortfolio })
    }

    handleF1J1Change = (data) => {
        this.setState({ 'F1/J1 Visa': data })
    }

    handleUSCitiChange = (citizen) => {
        this.setState({ 'US Citizenship': citizen })
    }

    handleurlPLChange = (pl) => {
        this.setState({ 'Primary Language': pl })
    }

    handleurlCurrCompChange = (currComp) => {
        this.setState({ currentCompany: currComp })
    }

    handleFavToolChange = (tool) => {
        this.setState({ 'Favorite Tool': tool })
    }

    handleCountryOfResChange = (countryOfRes) => {
        this.setState({ 'Country of Residence': countryOfRes })
    }

    render() {

        const urlLength = JSON.stringify(this.props.navigation.getParam('photoUrl')).length
        const photoUrl = JSON.stringify(this.props.navigation.getParam('photoUrl')).substring(1, urlLength - 1)
        const nameLength = JSON.stringify(this.props.navigation.getParam('name')).length
        const name = JSON.stringify(this.props.navigation.getParam('name')).substring(1, nameLength - 1)
        const emailLength = JSON.stringify(this.props.navigation.getParam('email')).length
        const email = JSON.stringify(this.props.navigation.getParam('email')).substring(1, emailLength - 1)

        let { image } = this.state

        return (
            <ScrollView style={{backgroundColor: Theme.mainColor}}>
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
                    value={this.state.School}
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
                    placeholder='Phone Number'
                    maxLength={100}
                    value={this.state.phoneNumber}
                    onChangeText={this.handlePhoneChange}
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
                <TextInput
                    style={styles.textInput}
                    placeholder='F1/J1 Visa (Y/N)'
                    maxLength={100}
                    value={this.state['F1/J1 Visa']}
                    onChangeText={this.handleF1J1Change}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='US citizenship Status'
                    maxLength={100}
                    value={this.state['US Citizenship']}
                    onChangeText={this.handleUSCitiChange}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Primary Language'
                    maxLength={100}
                    value={this.state['Primary Language']}
                    onChangeText={this.handleurlPLChange}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Current Company'
                    maxLength={100}
                    value={this.state.currentCompany}
                    onChangeText={this.handleurlCurrCompChange}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Favorite Tool'
                    maxLength={100}
                    value={this.state['Favorite Tool']}
                    onChangeText={this.handleFavToolChange}
                    autoFocus={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Country of Residence'
                    maxLength={100}
                    value={this.state['Country of Residence']}
                    onChangeText={this.handleCountryOfResChange}
                    autoFocus={true}
                />
                <Button
                    style={styles.submitButton}
                    onPress={this._pickImage}
                    title="Upload your resume and submit"
                />
                {this._maybeRenderImage()}
                {this._maybeRenderUploadingOverlay()}
            </ScrollView>
        )
    }

    _maybeRenderUploadingOverlay = () => {
        if (this.state.uploading) {
            return (
                <View
                    style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
                    <ActivityIndicator color="#fff" size="large" />
                </View>
            )
        }
    }

    _maybeRenderImage = () => {
        let {
            image
        } = this.state

        if (!image) {
            return
        }

        return (
            <View
                style={styles.maybeRenderContainer}>
                <View
                    style={styles.maybeRenderImageContainer}>
                    <Image source={{ uri: image }} style={styles.maybeRenderImage} />
                </View>

                <Text
                    onPress={this._copyToClipboard}
                    onLongPress={this._share}
                    style={styles.maybeRenderImageText}>
                    {image}
                </Text>
            </View>
        )
    }

    _share = () => {
        Share.share({
            message: this.state.image,
            title: 'Check out this photo',
            url: this.state.image,
        })
    }

    _copyToClipboard = () => {
        Clipboard.setString(this.state.image)
        alert('Copied image URL to clipboard')
    }

    _takePhoto = async () => {
        const {
            status: cameraPerm
        } = await Permissions.askAsync(Permissions.CAMERA)

        const {
            status: cameraRollPerm
        } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

        // only if user allows permission to camera AND camera roll
        if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
            let pickerResult = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 3],
            })

            this._handleImagePicked(pickerResult)
        }
    }

    _pickImage = async () => {
        const {
            status: cameraRollPerm
        } = await Permissions.askAsync(Permissions.CAMERA_ROLL)

        // only if user allows permission to camera roll
        if (cameraRollPerm === 'granted') {
            let pickerResult = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
            })

            this._handleImagePicked(pickerResult)
        }
    }

    _handleImagePicked = async pickerResult => {
        let uploadResponse, uploadResult

        try {
            this.setState({
                uploading: true
            })

            if (!pickerResult.cancelled) {
                uploadResponse = await this.uploadImageAsync(pickerResult.uri)
                uploadResult = await uploadResponse.json().catch(error => console.log(error))

                this.setState({
                    image: uploadResult.location
                })

                alert('Upload Successful!')

                const email = JSON.stringify(this.props.navigation.getParam('email'))
                const name = JSON.stringify(this.props.navigation.getParam('name'))
                const urlLength = JSON.stringify(this.props.navigation.getParam('photoUrl')).length
                const photoUrl = JSON.stringify(this.props.navigation.getParam('photoUrl')).substring(1, urlLength - 1)
                const idLength = JSON.stringify(this.props.navigation.getParam('id')).length
                const id = JSON.stringify(this.props.navigation.getParam('id')).substring(1, idLength - 1)

                const user = {
                    ...this.state,
                    email,
                    name,
                    photoUrl,
                    id,

                }
                console.log(user)
                this.props.addUser(user)
                const { navigate } = this.props.navigation
                navigate('MainScreen')

            }
        } catch (e) {
            console.log({ uploadResponse })
            console.log({ uploadResult })
            console.log({ e })
            const { navigate } = this.props.navigation
            navigate('MainScreen')
        } finally {
            this.setState({
                uploading: false
            })
        }
    }


    uploadImageAsync = async uri => {
        let apiUrl = 'http://18.191.30.17:5000/profile'
        const email = JSON.stringify(this.props.navigation.getParam('email'))
        const name = JSON.stringify(this.props.navigation.getParam('name'))
        const urlLength = JSON.stringify(this.props.navigation.getParam('photoUrl')).length
        const photoUrl = JSON.stringify(this.props.navigation.getParam('photoUrl')).substring(1, urlLength - 1)
        const idLength = JSON.stringify(this.props.navigation.getParam('id')).length
        const id = JSON.stringify(this.props.navigation.getParam('id')).substring(1, idLength - 1)
        const first_name = name.split(' ').slice(0, -1).join(' ');
        const last_name = name.split(' ').slice(-1).join(' ');

        const user = {
            
            first_name,
            last_name,
            email,
            school: this.state.School,
            currentCompany: this.state.currentCompany,
            job_application_location: this.state.jobApplicationLocation,
            url_linkedin: this.state.urlLinkedin,
            phone: this.state.phone,
            'f1/j1_visa': this.state['F1/J1 Visa'],
            'us_citizenship': this.state['US Citizenship'],
            'primary_language': this.state['Primary Language'],
            'favorite_tool': this.state['Favorite Tool'],
            'country_of_residence': this.state['Country of Residence'],

        }

        let uriParts = uri.split('.')
        let fileType = uriParts[uriParts.length - 1]

        let formData = new FormData()

        formData.append('photo', {
            uri,
            name: `photo.${fileType}`,
            type: `image/${fileType}`,
        })

        formData.append('id', id)

        formData.append('type', fileType)

        formData.append('user', user)

        console.log(formData)
        let options = {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            },
        }

        return fetch(apiUrl, options)

    }
}

const maptStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(AddUser(user)),
    }
}


export default connect(maptStateToProps, mapDispatchToProps)(DataEntry)