import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, Image, View,ListView,ActivityIndicator} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


import firebase from "../utils/firebase"
import '@firebase/firestore';

const rows = [
  { id: 0, cultivar: 'Carolina Reaper', scoville: ' 10000 SHU' },
  { id: 1, cultivar: 'Jalapeno', scoville: ' 10000 SHU' },
  { id: 2, cultivar: 'Poblano', scoville: ' 10000 SHU' },
  { id: 3, cultivar: 'Habanero', scoville: ' 10000 SHU' },
  { id: 4, cultivar: 'Ghost Pepper', scoville: ' 10000 SHU' },
]

const extractKey = ({ id}) => id.toString()
const db = firebase.firestore();


export default class App extends Component {
  state={
    userData: null
  }
  componentDidMount() {
if(this.state.userData==null) {
  var user = firebase.auth().currentUser;

  console.log(user);
  const db = firebase.firestore();
  

  db.collection("Users").doc(user.uid).get().then((doc) =>{
    if (doc.exists) {
      //  console.log("Document data:", doc.data());
        var theUserData = doc.data();
       // console.log({...theUserData})
        //console.log(theUserData);

        this.setState({
          userData:theUserData})
      console.log(this.state.userData)
        console.log(this.state.userData.Plants[0].name)
        return doc.data();
        
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });
}
  };
  getUserData=() => {
    var user = firebase.auth().currentUser;

    console.log(user);
    const db = firebase.firestore();
    db.collection("Users").doc(user.uid).get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          return doc.data();
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });

  }

addData = event => {
  var user = firebase.auth().currentUser;
  db.collection("Users").doc(user.uid).set({ 
    Plants :[{
    name: "Carolina Red Peppers",
    Number: 44,
    Notes: "Notes for your peppers"
    },
    {
      name: "Green Peppers",
      Number: 33,
      Notes: "Notes for Peppers"
    }]


})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

  
}
AddPlantsButton = () =>{
  return <Button title="yes">

  </Button>

}

  render() {
    const {userData} =this.state;
    if(this.state.userData==null) {
    return(
      <Button
  onPress={this.addData}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

    )}else{
      return(
       
        
        userData.Plants.map((Data) => <Card
       title='HELLO WORLD'
       >
       <Text style={{marginBottom: 3}}>
         {Data.name}
       </Text>
       <Text style={{marginBottom: 3}}>
        Amount: {Data.Number}
       </Text>
       <Text style={{marginBottom: 4}}>
         {Data.Notes}
       </Text>
       <Button
         
         backgroundColor='#03A9F4'
         buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
         title='VIEW NOW' />
     </Card>)
    
      )
    }
    
  }
  

  // renderItem = ({ item }) => {
  //   return (
  
  //     <Text style={styles.row}>
  //       {item.cultivar}
  //       {item.scoville}
        
  //     </Text>
      
  //   );
  // }
  // render() {
  //   return (
  //     <FlatList
  //       style={styles.container}
  //       data={rows}
  //       renderItem={this.renderItem}
  //       keyExtractor={extractKey}
  //     />
  //   );
  // }
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