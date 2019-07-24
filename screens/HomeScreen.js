import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
        <Text style={styles.text}> Plant App Lnding Page </Text>
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
