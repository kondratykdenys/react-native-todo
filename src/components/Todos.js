import React from 'react'
import { View, Text, FlatList } from 'native-base'

export const Todos = ({ data }) => {
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
  return (
    <FlatList data={data} renderItem={renderItem} key={(item) => item.id} />
  )
}
