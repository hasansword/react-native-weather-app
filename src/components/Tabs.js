/* eslint-disable no-unused-vars */
import React from 'react'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            backgroundColor: 'white',
        },
        headerStyle:{
            backgroundColor: 'white',
        },
        headerTitleStyle:{
            fontWeight: 'bold',
            fontSize: 25,
            color: 'tomato',
        }
      }}
    >
      <Tab.Screen
        name={'Current'}
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="cloud-sun-rain" size={32} color={color} />
          )
        }}
      />
      <Tab.Screen
        name={'Upcoming'}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clock" size={32} color={color} />
          )
        }}
      />
      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="map-marker" size={32} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
