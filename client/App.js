import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles/styles'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { RootReducer } from './redux/rootRedcuer'

const store = createStore(RootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>its working</Text>
      </View>
    </Provider>
  );
}

