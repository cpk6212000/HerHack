import React, { Component, Class } from "react";
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from "react-native";
import colors from "../style/color/";
import InputField from '../component/InputField';
import NextArrowButton from "../component/Button/NextArrowButton";
export default class Login extends Component {
  constructor(){
    super();
    this.state={
      email: '',
      password: ''
    }
  }
  handleTextInput = (value) => {
    this.props.inputType == "email" ? this.setState({email:value}):this.setState({password:value})
    //console.log(this.state);
  }
  render() {
    //const {email,password} = this.state;
    const {navigate} = this.props.navigation;
    return (
    <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
      <View style={styles.scrollViewWrapper}>
        <ScrollView style={styles.avoidView}>
          <Text style={styles.loginHeader}>Login</Text>
          <InputField 
          labelText="E-mail" 
          labelTextSize={14} 
          labelColor={colors.white}
          textColor={colors.white}
          borderBottomColor={colors.white}
          inputType="email"
          customStyle={{marginBottom:30}}
          //onChange={this.handleTextInput}
          />
          <InputField 
          labelText="Password" 
          labelTextSize={14} 
          labelColor={colors.white}
          textColor={colors.white}
          borderBottomColor={colors.white}
          inputType="password"
          customStyle={{marginBottom:30}}
          //onChange={this.handleTextInput}
          />
        </ScrollView>
        <NextArrowButton onPress={()=>navigate('Map')} />
      </View>
    </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.green01
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex:1
   },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  }
});
