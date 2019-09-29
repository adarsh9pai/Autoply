import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { RootReducer } from './redux/rootRedcuer'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './pages/homeScreen'
import MainScreen from './pages/bottomNavigation'
import DataEntry from './pages/dataEntry'
import WebScreen from './pages/webScreen'

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

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
  MainScreen: { screen: MainScreen },
  DataEntry: { screen: DataEntry },
  WebView: { screen: WebScreen },
},
{
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#000'
    }
  }
})

const NavApp = createAppContainer(MainNavigator, { tintColor: 'black'})