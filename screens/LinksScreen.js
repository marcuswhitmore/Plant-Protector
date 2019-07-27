import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, Image, View } from 'react-native';

const rows = [
  { id: 0, cultivar: 'Carolina Reaper', scoville: ' 10000 SHU' },
  { id: 1, cultivar: 'Jalapeno', scoville: ' 10000 SHU' },
  { id: 2, cultivar: 'Poblano', scoville: ' 10000 SHU' },
  { id: 3, cultivar: 'Habanero', scoville: ' 10000 SHU' },
  { id: 4, cultivar: 'Ghost Pepper', scoville: ' 10000 SHU' },
]

const extractKey = ({ id }) => id

export default class App extends Component {

  renderItem = ({ item }) => {
    return (
  
      <Text style={styles.row}>
        {item.cultivar}
        {item.scoville}
        
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