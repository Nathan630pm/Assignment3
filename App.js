import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native'; 



import LoginScreen from './login';
import Tabs from './tabs';
import Loading from './loading';
import SignUp from './signup';
import firebase from './firebase';
import Passreset from './passreset';
import CategoryScreen from './category';
import ProfilePEEventsScreen from './ProfilePEEventsScreen'
import Animated from 'react-native-reanimated';
import { create } from 'uuid-js';
import { Updates } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';





class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('./assets/grouprLogo.png')}
        style={{ width: 30, height: 30, left: 10 }}
      />
    );
  }
}

const stackNavigator = createStackNavigator({

  Login: {
    screen: Loading,
  },
  LoginScreen: {
    navigationOptions: ({ navigation }) => {
      return {
        gesturesEnabled: false,
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: <LogoTitle />,
        title: 'GROUPr | Log In',
        headerRight: (
          
          <TouchableOpacity style={styles.headerButton} onPress={() => { alert("Hello! Welcome to the official GROUPr app! to use this app, you must be signed in. you may create an account using the signup page, and then login here! Thanks for using GROUPr!") }}>
            <Text style={{ color: "white", fontWeight: 'bold' }}>App Info</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#00A600',
        },
      }
    },
    screen: LoginScreen,
  },
  SignUp: {
    navigationOptions: ({ navigation }) => {
      return {
        gesturesEnabled: true,
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: <LogoTitle />,
        title: 'GROUPr | Register',
        headerRight: (
          <TouchableOpacity style={styles.headerButton} onPress={() => { alert("Hello! Welcome to the official GROUPr app! to use this app, you must be signed in. you may create an account using the signup page, and then login here! Thanks for using GROUPr!") }}>
            <Text style={{ color: "white", fontWeight: 'bold' }}>App Info</Text>
          </TouchableOpacity>

        ),
        headerStyle: {
          backgroundColor: '#00A600',
        },
      }
    },
    screen: SignUp,
  },
  PasswordReset: {
    navigationOptions: ({ navigation }) => {
      return {
        gesturesEnabled: true,
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: <LogoTitle />,
        title: 'GROUPr | Reset Password',
        headerRight: (
          <TouchableOpacity style={styles.headerButton} onPress={() => { alert("Hello! Welcome to the official GROUPr app! to use this app, you must be signed in. you may create an account using the signup page, and then login here! Thanks for using GROUPr!") }}>
            <Text style={{ color: "white", fontWeight: 'bold' }}>App Info</Text>
          </TouchableOpacity>

        ),
        headerStyle: {
          backgroundColor: '#00A600',
        },
      }
    },
    screen: Passreset,
  },
  Category: {
    navigationOptions: ({ navigation }) => {
      return {
        gesturesEnabled: true,
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: <LogoTitle />,
        title: 'GROUPr | Categories',
        headerRight: (

          <TouchableOpacity style={styles.headerButton} onPress={() => { firebase.auth().signOut() }}>
            <Text style={{ color: "white", fontWeight: 'bold' }}>Log Out</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#00A600',
        },
      }
    },
    screen: CategoryScreen,
  },
  ProfilePEEventsScreen: {
    navigationOptions: ({ navigation }) => {
      return {
        gesturesEnabled: true,
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: <LogoTitle />,
        title: 'GROUPr | Profile Events',
        headerRight: (

          <TouchableOpacity style={styles.headerButton} onPress={() => { firebase.auth().signOut() }}>
            <Text style={{ color: "white", fontWeight: 'bold' }}>Log Out</Text>
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#00A600',
        },
      }
    },
    screen: ProfilePEEventsScreen,
  },
  tabs: {
    navigationOptions: ({ navigation }) => {
      return {
        headerMode: 'screen',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: <LogoTitle />,
        title: 'GROUPr',
        headerRight: (
          
          <TouchableOpacity style={styles.headerButton} onPress={() => { firebase.auth().signOut() }}>
            <Text style={{ color: "white", fontWeight: 'bold' }}>Log Out</Text>
          </TouchableOpacity> 
        ),
        headerStyle: {
          backgroundColor: '#00A600',
        },
      }},
    screen: Tabs
  }
},
  {
    headerMode: 'screen', // remove top bar and make full screen
    headerTransparent: true,
    navigationOptions: {
      headerVisible: true,
    },
    defaultNavigationOptions: { // remove swipe back gesture
      gesturesEnabled: false,
      headerLeft: null,
      headerMode: 'none'
    }}
)

const styles = StyleSheet.create({
  headerButton: {
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#008200',
    margin: 5,
    // right: 10,
  }
})


export default createAppContainer(stackNavigator)


