/* eslint-disable no-unused-vars */
import React from "react"
import { View, StyleSheet} from "react-native"
import City from "./src/screens/City"
import CurrentWeather from "./src/screens/CurrentWeather"
//import CurrentWeather from "./src/components/CurrentWeather"
import UpcomingWeather from "./src/screens/UpcomingWeather"
const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather/>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default App