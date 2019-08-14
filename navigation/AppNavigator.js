import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import loginScreen from '../screens/loginscreen';
import MainTabNavigator from './MainTabNavigator';
import loadingscreen from '../screens/apploading';

export default createAppContainer(
  createSwitchNavigator({
    
   login:loginScreen,
    Main: MainTabNavigator
  })
);
