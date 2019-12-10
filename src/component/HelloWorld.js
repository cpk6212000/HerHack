import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HelloWorldApp extends Component {
    static navigationOption= {
        title: "Hello World"
    }
  render() {
        const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}
