/* eslint-disable no-undef */
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const City = () => {
  const {
    container,
    cityText,
    cityName,
    cityCountry,
    imageLayout,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText
  } = style
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/istanbul-city.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>Istanbul</Text>
        <Text style={[cityCountry, cityText]}>Türkiye</Text>
        <View style={populationWrapper}>
          <Feather name={'users'} size={50} color={'white'} />
          <Text style={populationText}>16,700,000</Text>
        </View>
        <View style={riseSetWrapper}>
          <Feather name={'sunrise'} size={50} color={'white'} />
          <Text style={riseSetText}>7:45:52am</Text>
          <Feather name={'sunset'} size={50} color={'white'} />
          <Text style={riseSetText}>19:32:12pm</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  cityName: { fontSize: 40 },
  cityCountry: { fontSize: 30 },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  imageLayout: {
    flex: 1
  },
  populationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 7.5,
    fontWeight: 'bold'
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'space-around'
  }
})

export default City
