import React, {Component} from "react";
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard, Button} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from 'react-native-geolocation-service';
import PlaceInput from "../component/PlaceInput";
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   flex: 1,
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default class MapScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      userLatitude : 0,
      userLongtude : 0
    }
  }
  hideKeyboard(){
    Keyboard.dismiss();
  }
  componentDidMount= () => {
    this.locationId = Geolocation.watchPosition(
      (position) => {
          this.setState({
            userLatitude: position.coords.latitude,
            userLongtude: position.coords.longitude
          })
      },
      (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  }
  componentWillUnmount= () => {
    Geolocation.clearWatch(this.locationId)
  }
  render(){
    return(
      <TouchableWithoutFeedback onPress={this.hideKeyboard}>
    <View style={styles.container}>
      
      <MapView
        followsUserLocation
        showsUserLocation
        provider={MapView.PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: this.state.userLatitude,
          longitude: this.state.userLongtude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
      <PlaceInput/>
    </View>
    </TouchableWithoutFeedback>)
  }
};