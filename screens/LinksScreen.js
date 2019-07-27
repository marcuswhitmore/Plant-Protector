import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, Image, View } from 'react-native';

const rows = [
  { id: 0, text: 'Pepper', posters: 'https://i.imgur.com/UePbdph.jpg' },
  { id: 1, text: 'Pepper' },
  { id: 2, text: 'Pepper' },
  { id: 3, text: 'Pepper' },
  { id: 4, text: 'Pepper2' },
]

const extractKey = ({ id }) => id

export default class App extends Component {

  renderItem = ({ item }) => {
    return (
  
      <Text style={styles.row}>
        {item.text}
        {item.posters}
        
      </Text>
      
    );
  }
  render() {
    return (
      <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
        keyExtractor={extractKey}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
})