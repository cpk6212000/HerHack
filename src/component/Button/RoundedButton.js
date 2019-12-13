import React, { Component } from "react";
import { Text, View, TouchableHighlight, StyleSheet } from "react-native";
import propTypes from 'prop-types';
import colors from '../../style/color/index';
export default class RoundedButton extends Component {
render() {
    const {text,textColor, background, onPress, style} = this.props;
    const backgroundColor = background || 'transparent'
    const color = textColor || colors.black
      return(
      <TouchableHighlight style={[{backgroundColor},styles.wrapper]} onPress={onPress}> 
        <Text style={[ {color}, styles.buttonText]}>{text}</Text>
      </TouchableHighlight>
      )
   }
}
RoundedButton.propTypes = {
    text : propTypes.string.isRequired,
    color: propTypes.string,
    backgroundColor: propTypes.string,
    style: propTypes.any
}

const styles = StyleSheet.create({
    wrapper: {
      padding: 15,
      display: "flex",
      borderRadius: 40,
      borderWidth: 1,
      borderColor: colors.white,
      marginBottom: 20
    },
    buttonText: {
      fontSize: 16,
      width: "100%",
      textAlign: "center"
    }
  });