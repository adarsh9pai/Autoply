import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import JobScreen from '../components/jobScreen'
import ProfileScreen from '../components/profileScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import {Purple as Theme} from '../styles/colorThemes'

export default createMaterialBottomTabNavigator({
  JobScreen: {
    navigationOptions: {
      tabBarLabel: 'Jobs',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-briefcase' color={'white' } size={24} />
      )
    },
    screen: JobScreen,
    showLabel: true,
  },
  ProfileScreen: {
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-person' color={'white'} size={24} />
      ),
    },
    screen: ProfileScreen,
    showLabel: true,
  },
}, {
  tabBarOptions: {
    labelPosition: 'beside-icon',
  },
  shifting: true,
  initialRouteName: 'JobScreen',
  activeColor: 'white',
  barStyle: { backgroundColor: Theme.mainColor },
  order: ['JobScreen', 'ProfileScreen']
})