import React, { Component } from 'react';
import { View, Dimensions, KeyboardAvoidingView, ScrollView, Text, StyleSheet, forceUpdate, Button, Image, Animated } from 'react-native';
import NavigationEvents from 'react-navigation';
import Constants from 'expo-constants';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './login';
import firebase from './firebase';
import { CodedError } from '@unimodules/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import CategoryScreen from './category';
const { width, height } = Dimensions.get('window');

export default class HomeScreen extends Component {

    
    state = { username: 'user', currentUser: null }
    componentDidMount() {

        
        
        
        // VERY IMPORTANT DO NOT FORGET THIS CODE 
        // VERY IMPORTANT DO NOT FORGET THIS CODE 
        this._navListener = this.props.navigation.addListener('willFocus', () => {
            
            this.setState({ username: 'user' });
            // get your new data here and then set state it will rerender
            const { currentUser } = firebase.auth()
            this.setState({ currentUser })

            firebase.auth().onAuthStateChanged(user => {
                console.log()
                this.props.navigation.navigate(user ? '' : 'LoginScreen')
            })
            firebase.database().ref('users/' + currentUser.uid + '/username').on('value', (snapshot) => {
                console.log(snapshot.val())
                let data = snapshot.val();
                let username = data;
                this.setState({ username });
            });

            

        });
        // VERY IMPORTANT DO NOT FORGET THIS CODE 
        // VERY IMPORTANT DO NOT FORGET THIS CODE 
    
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })

        
        
        
    }

    categoryPress = (category) => {
        console.log(category);
        this.props.navigation.push('Category', {selectedCategory: category})
    }
    
    render() {
        console.log("user: " + this.state.username);
        const { currentUser } = this.state
        return (
            <View>
            <View style={styles.mainTitle}>
                <Text style={styles.title}>Events: Choose A Category</Text>
                <Text style={styles.title2}>
                    Hello, {this.state.username}, Welcome back!</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                
                
                <TouchableOpacity style={styles.category}
                    title="Sports"
                        onPress={() => this.categoryPress("sports")} >
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Sports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}
                    title="Public Events"
                        onPress={() => this.categoryPress("publicEvents")} >
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Public Events</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.category}
                    title="Tabletop"
                        onPress={() => this.categoryPress("tabletop")} >
                    <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Tabletop</Text>
                    </TouchableOpacity>

                    {/* {/* ADD A NEW CATEGORY USING THIS TEMPLATE:  */}
                    {/* <TouchableOpacity style={styles.category}
                        title="Tabletop"
                        onPress={() => this.categoryPress("test")} >
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Test</Text>
                    </TouchableOpacity> */}
                    

                    <TouchableOpacity style={styles.spacer}><Text style={{color: 'white'}}>Spacer</Text></TouchableOpacity>

                
                </ScrollView>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        
    },
    titleText: {
        fontSize: 30,
    },
    padding: {
        padding: 10,
    },
    title: {
        fontSize: 30,
        top: 0,
        // position: "absolute",
        alignSelf: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
    },
    title2: {
        top: 0,
        // position: 'absolute',
        alignSelf: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
    },
    category: {
        margin: 15,
        backgroundColor: "lightgrey",
        borderWidth: 1,
        borderRadius: 10,
        width: width - 50,
        height: 100,
        padding: 40,
        alignSelf: 'center',
        
    },
    button: {
        backgroundColor: "green",
        padding: 15,
        // backgroundColor: 'rgba(0,0,0, 0.1)',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 0,
        width: width - 50,
    },
    scrollView: {
        top: 50,
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
    },
    spacer: {
        padding: 30,
        margin: 30,
    },
    mainTitle: {
        height: 50,
        backgroundColor: 'rgba(52, 52, 52, 0.0)',
    }
});
