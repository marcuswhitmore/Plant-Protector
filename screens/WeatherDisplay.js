import React, { Component } from 'react';
import { API_KEY } from '../utils/WeatherAPIKey';
import { WeatherConditions } from '../utils/WeatherConditions';
import { WeatherWidget } from 'react-native-weather';
import './weathericon.css'


//make weather display to work here then export the component to the home page
export default class WeatherDisplay extends Component {
    
    render() {
        return (
            //https://cors-anywhere.herokuapp.com/
                <WeatherWidget
                    api={API_KEY}
                    lat={38.575764}
                    lng={-121.478851}
                />
            );
    }
}