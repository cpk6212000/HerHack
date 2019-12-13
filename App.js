/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LoggedOut from './src/screen/LoggedOut';
import HelloWorldApp from './src/component/HelloWorld';
import Profile from './src/component/Profile';
import Login from './src/screen/Login';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MapScreen from './src/screen/MapScreen';

const MainNavigator = createStackNavigator(
  {
    Landing:{screen: LoggedOut,
    navigationOptions:{
      title: "",
      headerRight: () => <Text></Text>
    }},
    Login: {screen: Login,
    navigationOptions:{
      title: "Login"
    }},
    Map:{screen: MapScreen,
    navigationOptions:{
      title:"Map"
    }},
  },
  {
    defaultNavigationOptions:({navigation}) => ({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('Map')}
          title="Profile"
          color="#000"
        />) 
    }),
  }
)

const App = createAppContainer(MainNavigator)

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
