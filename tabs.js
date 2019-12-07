import React, { Component } from 'react';
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation-tabs';
import { View, TabBarIcon,  KeyboardAvoidingView, Dimensions, Text, StyleSheet, Switch, TouchableOpacity, Button, Alert, prompt, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './home';
import NewEventScreen from './newevent';
import Profile from './profile';
import DataScreen from './data';





export default createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        tabBarOptions: {
            visible: false
        },
        navigationOptions: {
            tabBarLabel: 'Events',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'calendar'} icon={require('./assets/homeIcon.png')} />
                </View>),
        }
    },
    NewEvent: {
        screen: NewEventScreen,
        navigationOptions: {
            tabBarLabel: 'New Event',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'plus'} icon={require('./assets/aboutIcon.png')} />
                </View>),
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'user'} icon={require('./assets/homeIcon.png')} />
                </View>),
        }
    },
    NewPage: {
        screen: DataScreen,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={[{ color: tintColor }]} size={25} name={'gear'} icon={require('./assets/homeIcon.png')}/>
                </View>),
        }
    },
    
    

},
    {
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'black',
            style: {
                backgroundColor: '#00A600',
            },
            
        }
    }

)