import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/AntDesign";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";
import colors from "../../style/color";

class NextArrowButton extends Component {
    render(){
        const {onPress} = this.props;
        return(
            <View style={styles.buttonWrapper}>
                <TouchableHighlight 
                style={[{opacity:0.6},styles.button]}
                onPress={onPress}>
                    <Text>>></Text>
                </TouchableHighlight>
            </View>
        )
    }
}
NextArrowButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func
  };
const styles = StyleSheet.create({
    buttonWrapper: {
        alignItems: "flex-end",
        right: 20,
        bottom: 20,
        paddingTop: 0
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 60,
        height: 60,
        backgroundColor: colors.white
    },
    icon: {
        marginRight: -2,
        marginTop: -2
    }
});


export default NextArrowButton;
