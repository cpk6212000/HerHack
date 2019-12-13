import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
    StyleSheet
  } from 'react-native';
import colors from '../style/color/index';
import RoundedButton from '../component/Button/RoundedButton';

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      display: "flex",
      backgroundColor: colors.green01 
    },
    welcomeWrapper: {
      flex: 1,
      display: "flex",
      marginTop: 30,
      padding: 20
    },
    logo: {
      width: 50,
      height: 50,
      marginTop: 50,
      marginBottom: 40
    },
    welcomeText: {
      fontSize: 30,
      color: colors.white,
      fontWeight: "300",
      marginBottom: 40
    }
  });

export default class LoggedOut extends Component { 
    render() {
        const {navigate} = this.props.navigation
       return (
        <View style={styles.wrapper}> 
            <View style={styles.welcomeWrapper}>
                <Image
                style={styles.logo}
                source={require("../img/logo.png")}
                />
                <Text style={styles.welcomeText}>
                Welcome to Travel with HSBC.
                </Text>
                <RoundedButton text='Login'
                textColor={colors.green01}
                background={colors.white}
                onPress={()=>navigate('Login')}
                style={{marginBottom: 10}} />
                <RoundedButton text='Sign Up'
                textColor={colors.green01}
                background={colors.white}
                onPress={()=>navigate('Login')} />
            </View>
        </View>
       )
     }
}