import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, ViewStyleSheet, Text,View,TextInput, Button,TouchableHighlight,
  Image,
  Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyC3FmjDz7y6_cQE4zWrwguoCqCe7HxgT9M",
  authDomain: "plant-protector-27ea5.firebaseapp.com",
  databaseURL: "https://plant-protector-27ea5.firebaseio.com",
  projectId: "plant-protector-27ea5",
  storageBucket: "",
  messagingSenderId: "6658779484",
  appId: "1:6658779484:web:d7b4e231f598a527"
};
// Initialize Firebase

//import { Lottie } from 'lottie-react-native';

//mport API_KEY from '../utils/WeatherAPIKey';
//import Weather from '../components/Weather';

import AppNavigator from './navigation/AppNavigator';
firebase.initializeApp(firebaseConfig);
export default function App(props) {
 

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Authenticated,setAuthentication] =useState(false);
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
  var user = firebase.auth().currentUser;
  
  

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      alert(user.email);
      console.log("We are authenticated now!");
    }
  
    // Do other things
  });
  
  
  registerUser = event => {
   
      firebase.auth().createUserWithEmailAndPassword(username, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      })};
      
      signInUser = event => {
        
        firebase
          .auth()
          .signInWithEmailAndPassword(username, password)
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
          })};
            
          

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }else if(Authenticated == false) {
    return( 
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
            
              value={username}
              name="username"
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={setUserName}
            />
          </View>
  
          <View style={styles.inputContainer}>
            <TextInput
            value={password}
            name="password"
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={setPassword}
            />
          </View>
  
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.signInUser}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>
  
          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={() => this.onClickListener("restore_password")}
          >
            <Text>Forgot your password?</Text>
          </TouchableHighlight>
  
          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={this.registerUser}
          >
            <Text>Register</Text>
          </TouchableHighlight>
        </View>
    )
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

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
