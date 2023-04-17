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
import IconText from '../components/IconText'

const City = () => {
  const {
    container,
    cityText,
    cityName,
    cityCountry,
    imageLayout,
    rowLayout,
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
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'white'}
            bodyText={'17,060'}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
        <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'7:45'}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'18:45'}
            bodyTextStyles={riseSetText}
          />
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
    alignContent: 'center',
    marginTop: 30
  },
  populationText: {
    flexDirection: 'row',
    alignItems:'center',
    fontSize: 20,
    color: 'white',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    justifyContent: 'space-between'
  },
  rowLayout:{
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default City
