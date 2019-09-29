import React from 'react'
import { View, Dimensions, ImageBackground, Animated, PanResponder, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { styles } from '../styles/styles'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

class JobScreen extends React.Component {

  constructor() {
    super()

    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['5deg', '0deg', '-5deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }
  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {

        if (gestureState.dx > 120) {
          this.onRightSwipe()
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else if (gestureState.dx < -120) {
          this.onLeftSwipe()
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  renderUsers = (props) => {
    return props.jobs.map((job, i) => {


      if (i < this.state.currentIndex) {
        return null
      }
      else if (i == this.state.currentIndex) {

        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={job.id}
            style={[this.rotateAndTranslate, {
            height: SCREEN_HEIGHT * 0.80, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
            }]}>
            <ImageBackground style={{ height: '100%' }} imageStyle={styles.job_image}
              source={{ uri: job.image }}>
              <Text style={styles.job_text}>
                {job.name}
              </Text>
            </ImageBackground>

          </Animated.View>
        )
      }
      else {
        return (
          <Animated.View
            key={job.id} style={[{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT * 0.80, width: SCREEN_WIDTH, padding: 10, position: 'absolute'
            }]}>
            <ImageBackground style={{ height: '100%' }} imageStyle={styles.job_image}
              source={{ uri: job.image }}>
              <Text style={styles.job_text}>
                {job.name}
              </Text>
            </ImageBackground>
          </Animated.View>
        )
      }
    }).reverse()
  }

  onRightSwipe = e => {
    console.log('right swiped')
  }

  onLeftSwipe = e => {
    console.log('left swiped')
  }

  render() {
    return (
      <View>
        {this.renderUsers(this.props)}
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