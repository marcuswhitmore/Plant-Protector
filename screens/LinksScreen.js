import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
//import pokemon from './pokemonStore.js';



export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
          style={styles.image}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Image
          style={styles.image}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
  },
});
