import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles/styles'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { RootReducer } from './redux/rootRedcuer'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './pages/homeScreen'
import MainScreen from './pages/bottomNavigation'
import EntryScreen from './pages/dataEntry'
import WebScreen from './pages/webScreen'
import Resume from './pages/resume'


const store = createStore(RootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <NavApp />
    </Provider>
  )
}

const MainNavigator = createStackNavigator({
  MainScreen: { screen: Resume },
  Home: { screen: HomeScreen },
  DataEntry: {screen: EntryScreen},
  Web: { screen: WebScreen },
})

const NavApp = createAppContainer(MainNavigator)