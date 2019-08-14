import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, ViewStyleSheet, Text,View,TextInput, Button,TouchableHighlight,
  Image,
  Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from "./utils/firebase";




import AppNavigator from './navigation/AppNavigator';

//firebase.initializeApp(firebaseConfig);
export default function App(props) {
  
  
 

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");

          

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }else{
  //  console.log(user.email);
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
    
  } 
};
async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFDE4'
    },
    loadingText: {
        fontSize: 30
    },
    inputContainer: {
      borderBottomColor: "#F5FCFF",
      backgroundColor: "#FFFFFF",
      borderRadius: 30,
      borderBottomWidth: 1,
      width: 250,
      height: 45,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center"
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: "#FFFFFF",
      flex: 1
    },
    inputIcon: {
      width: 30,
      height: 30,
      marginLeft: 15,
      justifyContent: "center"
    },
    buttonContainer: {
      height: 45,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      width: 250,
      borderRadius: 30
    },
    loginButton: {
      backgroundColor: "#00b5ec"
    },
    loginText: {
      color: "white"
    }
});
