import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import JobScreen from '../components/jobScreen'
import ProfileScreen from '../components/profileScreen'


export default createMaterialBottomTabNavigator({
  JobScreen: {
    screen: JobScreen
  },
  ProfileScreen: {
    screen: ProfileScreen
  },
}, {
  initialRouteName: 'JobScreen',
  activeColor: '#F44336',
})