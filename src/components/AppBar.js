import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../constants/style'

export const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.text}>React Todo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  appBar: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    height: 80,
    backgroundColor: colors.blue,
  },
  text: {
    color: '#fff',
    fontSize: 19,
  },
})
