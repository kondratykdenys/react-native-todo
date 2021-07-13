import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NativeBaseProvider } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { AllScreen } from './src/screen/AllScreen'
import { ActiveScreen } from './src/screen/ActiveScreen'
import { CompletedScreen } from './src/screen/CompletedScreen'
import { AppBar } from './src/components/AppBar'
import { AddTodoButton } from './src/components/AddTodoButton'
import status from './src/constants/status'
import { colors } from './src/constants/style'

const Tab = createBottomTabNavigator()

export default function App() {
  const [todos, setTodos] = useState([])
  console.log(todos);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppBar />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName
              switch (route.name) {
                case status.ALL:
                  iconName = focused ? 'ios-list-circle' : 'ios-list'
                  break
                case status.ACTIVE:
                  iconName = focused
                    ? 'ios-checkmark-done-circle'
                    : 'ios-checkmark-done'
                  break
                case status.COMPLETED:
                  iconName = focused ? 'shield-checkmark' : 'ios-checkmark'
                  break
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}
          tabBarOptions={{
            activeTintColor: colors.green,
            inactiveTintColor: colors.grey,
          }}
        >
          <Tab.Screen name="All" component={() => <AllScreen todos={todos} />} />
          <Tab.Screen name="Active" component={ActiveScreen} />
          <Tab.Screen name="Completed" component={CompletedScreen} />
        </Tab.Navigator>
        <AddTodoButton onPress={() => setTodos([{id: Date.now(), title: 'New Todo', status: false}, ...todos])}/>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
