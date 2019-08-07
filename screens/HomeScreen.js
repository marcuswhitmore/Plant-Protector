import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Alert, TouchableHighlight } from 'react-native';
import { API_KEY } from '../utils/WeatherAPIKey';
import { WeatherWidget } from 'react-native-weather'; //https://cors-anywhere.herokuapp.com/
//import './weathericon.css'

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#3F4447'}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
        <Text style={styles.text}> Plant Protector </Text>
        </View>
        <View style={{flex: 3, backgroundColor: 'skyblue'}} >
            <Text style={styles.text}>Weather go info goes here</Text>
                
                <WeatherWidget
                    api={'743af1f566d6d2915bed99fc91fa6462'}
                    lat={38.575764}
                    lng={-121.478851}
                />
        </View>
        
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
