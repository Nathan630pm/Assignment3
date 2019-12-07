import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, Dimensions, TouchableOpacity, Button} from 'react-native';
import firebase from './firebase';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import DialogInput from 'react-native-dialog-input';

const { width, height } = Dimensions.get('window');

// const firebase = firebase.database();


export default class SettingsScreen extends Component {

   

   

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.topTitle}>The Settings page is coming soon!</Text>
                
                
                </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 30,
    },
    padding: {
        padding: 10,
    },
    TextInput: {
        backgroundColor: 'green',
        height: 20,
        width: '100%',
        marginBottom: 30,
        textAlign: "center"
    },
    title: {
        fontSize: 30,
    },
    topTitle: {
        fontSize: 30,
        top: 0,
        position: "absolute",
        alignSelf: 'center',
        top: height/2.5
    },
    editArea: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    items: {
        padding: 5,
        fontSize: 15,
    },
    todoEditor: {
        paddingBottom: 5,
        width: '100%',
        textAlign: 'justify',
        position: 'absolute',
        top: 30,
    },
    buttons: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

});