import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Alert, TouchableHighlight } from 'react-native';





export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#3F4447'}}>
        
        <View style={{flex: 3, backgroundColor: 'skyblue'}} >
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            null,
            null,
            [
              {text: 'Button', onPress: () => console.log('Button Pressed!')},
              // on press send request via https to Pid
            ]
          )}>
          <View style={styles.button}>
            <Text>Device ON</Text>
          </View>
        </TouchableHighlight>
        </View>
        <View style={{flex: 3, backgroundColor: 'skyblue'}} >
        <TouchableHighlight style={styles.wrapper}
          onPress={() => Alert.alert(
            null,
            null,
            [
              {text: 'Button', onPress: () => console.log('Button Pressed!')},
              // on press send request via https to Pid
            ]
          )}>
          <View style={styles.button}>
            <Text>Device OFF</Text>
          </View>
        </TouchableHighlight>
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
