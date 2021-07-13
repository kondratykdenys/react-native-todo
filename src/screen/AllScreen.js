import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../constants/style'
import { Todos } from '../components/Todos'

export const AllScreen = ({ todos }) => {
  console.log(todos);
  if (!todos?.length) {
    return (
      <View style={styles.app}>
        <Text style={styles.empty}>Add new todo</Text>
      </View>
    )
  }

  return (
    <View style={styles.app}>
      <Todos data={todos} />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  empty: {
    color: colors.error
  }
})
