import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Alert, TouchableHighlight } from 'react-native';
import { WeatherWidget } from 'react-native-weather';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#3F4447'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
        <Text style={styles.text}> Plant Protector </Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'skyblue'}} >
        <Text style={styles.text}>Weather go info goes here</Text>
       
        </View>
        <WeatherWidget
          api={"99b722aa5365f77af4c004c0cca23ef9"}
          lat={40.3601}
          long={-71.0589}
        />
        
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
