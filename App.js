/* eslint-disable no-unused-vars */
import React from 'react'
import City from './src/screens/City'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Current'} component={CurrentWeather} />
        <Tab.Screen name={'Upcoming'} component={UpcomingWeather} />
        <Tab.Screen name={'City'} component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
