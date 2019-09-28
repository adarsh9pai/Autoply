import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles/styles'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { RootReducer } from './redux/rootRedcuer'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './pages/homeScreen'
import ProfileScreen from './pages/profileScreen'


const store = createStore(RootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavApp />
    </Provider>
  )
}

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
})

const NavApp = createAppContainer(MainNavigator)