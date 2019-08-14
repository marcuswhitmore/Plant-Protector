import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
import firebase from "../utils/firebase";
import App from "../App";
// import * as firebase from 'firebase';

// var firebaseConfig = {
//   apiKey: "AIzaSyC3FmjDz7y6_cQE4zWrwguoCqCe7HxgT9M",
//   authDomain: "plant-protector-27ea5.firebaseapp.com",
//   databaseURL: "https://plant-protector-27ea5.firebaseio.com",
//   projectId: "plant-protector-27ea5",
//   storageBucket: "",
//   messagingSenderId: "6658779484",
//   appId: "1:6658779484:web:d7b4e231f598a527"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);



export default class LoginView extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }


       signInUser = event => {
        
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
             var errorMessage = error.message;
          }).then(()=>{
            var user = firebase.auth().currentUser;

            if (user) {
                this.props.navigation.navigate('Main')
            } else {
              // No user is signed in.
            }
          })};

  registerUser = event => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      }).then(()=>{
        var user = firebase.auth().currentUser;

        if (user) {
            this.props.navigation.navigate('Main')
        } else {
          // No user is signed in.
        }
      })};


     

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
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
          onPress={() => this.registerUser}
        >
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC"
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