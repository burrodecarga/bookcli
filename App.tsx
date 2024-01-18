import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import AppNavigation from './src/navigation'

function App(): React.JSX.Element {
  return (
    <AppNavigation />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
})

export default App
