import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, date, temp } = styles
    return (
      <View style={styles.item}>
        <Feather name={'sun'} size={50} color={'white'} />
        <Text style={date}>{dt_txt}</Text>
        <Text style={temp}>{min}</Text>
        <Text style={temp}>{max}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 2,
        borderColor:'white',
        backgroundColor: '#03A9F4',
        opacity: 0.9,
        borderRadius:20,
      },
      temp: {
        fontSize: 20,
        color: 'white'
      },
      date: {
        fontSize: 15,
        color: 'white'
      },

})

  export default ListItem