import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  Image,
  Animated,
  ImageBackground,
  PanResponder
} from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../styles/styles'

const SH = Dimensions.get('window').height
const SW = Dimensions.get('window').width

class JobScreen extends Component {
  constructor(props) {
    super(props)

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

      }
    })
  }

  static navigationOptions = {
    title: 'JobScreen'
  }

  renderJobs = e => {
    console.log('hi')
    // return this.props.jobs ?
    return this.props.jobs.map((job, i) => {
      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={job.id}
            style={[{
              transform: this.position.getTranslateTransform()
            }, styles.job_card]}
          >
            <ImageBackground
              style={styles.job_card_image}
              resizeMode="cover"
              source={{ uri: job.image }}
            // imageStyle={styles.job_card}
            >
              <Text style={styles.job_card_company}>
                {job.name}
              </Text>
            </ImageBackground>
          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View
            // {...this.PanResponder.panHandlers}
            // style={[{
            //   transform: this.position.getTranslateTransform()
            // },]}
            key={job.id}
            style={styles.job_card}
          >
            <ImageBackground
              style={styles.job_card_image}
              resizeMode="cover"
              source={{ uri: job.image }}
            // imageStyle={styles.job_card}
            >
              <Text style={styles.job_card_company}>
                {job.name}
              </Text>
            </ImageBackground>
          </Animated.View>
        )

      }
    }
    )
    // : <View> Loading Jobs </View>
  }

  render() {
    // const { jobs } = this.props
    const { navigate } = this.props.navigation

    return (
      <View>
        {this.renderJobs()}
      </View>
    )
  }
}

const maptStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
}

export default connect(maptStateToProps)(JobScreen);