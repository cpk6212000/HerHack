import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../style/color/index';

export default class HelloWorldApp extends Component {
    static navigationOption= {
        title: "Hello World"
    }
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>HomePage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex : 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green01
  },
  welcomeText: {
    color: colors.white,
    fontWeight: "300",
    fontSize:30
  }
}
)
