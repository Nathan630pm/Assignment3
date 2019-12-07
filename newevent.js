import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput,  Dimensions, Picker, Image, Animated, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker'
import firebase from './firebase'
// import { useDarkMode } from 'react-native-dark-mode'

const { width, height } = Dimensions.get('window');



export default class NewEvent extends Component {
    componentDidMount() {
        var day = (new Date().getDate() < 10 ? '0' : '') + new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year

        this.setState({day: day, month: month, year: year})

        console.log("Date: " + day);
        console.log("month: " + month);
        console.log("year: " + year)
        
    }

    addEvent = () => {
        this.setState({ errorMessage: null, done: null})
        if (this.state.eventTitle == '' || this.state.date == '' || this.state.timeStart == '' || this.state.timeEnd == '' || this.state.category == '') {
            this.setState({ errorMessage: "Please enter all fields!"})
            return false
        }

        var random = Math.floor(Math.random() * 10000) + 1000 + "_" + Math.floor(Math.random() * 10000) + 1000 + "_" + Math.floor(Math.random() * 10000) + 1000 + "_" + Math.floor(Math.random() * 10000) + 1000 + "_" + Math.floor(Math.random() * 10000) + 1000;
        console.log("Random String: " + random)
        
        var parsedDate = this.state.date.replace(/\-/g, '');
        var year = parsedDate.substring(0, 4)
        var month = parsedDate.substring(4, 6)
        var day = parsedDate.substring(6, 8)
        if (day < 10) {
            day = day.substring(1)
        }
        if (month < 10) {
            month = month.substring(1)
        }
        console.log("year: " + year)
        console.log("month: " + month)
        console.log("day: " + day)

        var months = ['null', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Spetember', 'October', 'November', 'December'];
        var days = ['null', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
        

        firebase.database().ref('categories/' + this.state.category + '/' + random).set({
            date: months[month] + " " + days[day] + " " + year,
            time: this.state.timeStart,
            endtime: this.state.timeEnd,
            title: this.state.eventTitle
        })
            .catch(error => this.setState({ errorMessage: error.message }))
        this.setState({ timeStart: '', timeEnd: '', eventTitle: '', date: '', category: '', done: 'Event Added!' })

        
    }
    state = { timeStart: '', date: '', eventTitle: ''}
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.titleText}>Create An Event...</Text>

                
                <TextInput
                    style={styles.textInput}
                    autoCapitalize="words"
                    placeholder="Event Title..."
                    placeholderTextColor="black"
                    onChangeText={eventTitle => this.setState({ eventTitle })}
                    value={this.state.eventTitle}
                />

                <View style={styles.datePicker}>

                    <Text style={styles.itemTitle}>Event Date:</Text>
                    <DatePicker
                        style={{ width: 200, backgroundColor: '#00A600' }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        // minDate={this.state.year + "-" + this.state.month + "-" + this.state.day}
                        minDate={this.state.year + "-" + this.state.month + "-" + this.state.day}
                        // maxDate="2099-01-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        textColor='#00A600'
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            datePicker: {
                                backgroundColor: '#333333',
                                shadowColor: '#AFAFAF'
                            },
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />

                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', paddingBottom: 50 }}>
                    <View style={{ width: '33%', alignSelf: 'center'}}>
                        <Text style={styles.itemTitle}>Starts at...</Text>
                <Picker style={styles.pickerStyle}
                    selectedValue={this.state.timeStart}
                            onValueChange={(itemValue1, itemPosition1) =>
                                this.setState({ timeStart: itemValue1, choosenIndex1: itemPosition1, timeEnd: itemValue1 })}
                >
                    <Picker.Item label="----" value="" />
                    <Picker.Item label="12:00am" value="12:00am" />
                    <Picker.Item label="12:30am" value="12:30am" />
                    <Picker.Item label="1:00am" value="1:00am" />
                    <Picker.Item label="1:30am" value="1:30am" />
                    <Picker.Item label="2:00am" value="2:00am" />
                    <Picker.Item label="2:30am" value="2:30am" />
                    <Picker.Item label="3:00am" value="3:00am" />
                    <Picker.Item label="3:30am" value="3:30am" />
                    <Picker.Item label="4:00am" value="4:00am" />
                    <Picker.Item label="4:30am" value="4:30am" />
                    <Picker.Item label="5:00am" value="5:00am" />
                    <Picker.Item label="5:30am" value="5:30am" />
                    <Picker.Item label="6:00am" value="6:00am" />
                    <Picker.Item label="6:30am" value="6:30am" />
                    <Picker.Item label="7:00am" value="7:00am" />
                    <Picker.Item label="7:30am" value="7:30am" />
                    <Picker.Item label="8:00am" value="8:00am" />
                    <Picker.Item label="8:30am" value="8:30am" />
                    <Picker.Item label="9:00am" value="9:00am" />
                    <Picker.Item label="9:30am" value="9:30am" />
                    <Picker.Item label="10:00am" value="10:00am" />
                    <Picker.Item label="10:30am" value="10:30am" />
                    <Picker.Item label="11:00am" value="11:00am" />
                    <Picker.Item label="11:30am" value="11:30am" />
                    <Picker.Item label="12:00pm" value="12:00pm" />
                    <Picker.Item label="12:30pm" value="12:30pm" />
                    <Picker.Item label="1:00pm" value="1:00pm" />
                    <Picker.Item label="1:30pm" value="1:30pm" />
                    <Picker.Item label="2:00pm" value="2:00pm" />
                    <Picker.Item label="2:30pm" value="2:30pm" />
                    <Picker.Item label="3:00pm" value="3:00pm" />
                    <Picker.Item label="3:30pm" value="3:30pm" />
                    <Picker.Item label="4:00pm" value="4:00pm" />
                    <Picker.Item label="4:30pm" value="4:30pm" />
                    <Picker.Item label="5:00pm" value="5:00pm" />
                    <Picker.Item label="5:30pm" value="5:30pm" />
                    <Picker.Item label="6:00pm" value="6:00pm" />
                    <Picker.Item label="6:30pm" value="6:30pm" />
                    <Picker.Item label="7:00pm" value="7:00pm" />
                    <Picker.Item label="7:30pm" value="7:30pm" />
                    <Picker.Item label="8:00pm" value="8:00pm" />
                    <Picker.Item label="8:30pm" value="8:30pm" />
                    <Picker.Item label="9:00pm" value="9:00pm" />
                    <Picker.Item label="9:30pm" value="9:30pm" />
                    <Picker.Item label="10:00pm" value="10:00pm" />
                    <Picker.Item label="10:30pm" value="10:30pm" />
                    <Picker.Item label="11:00pm" value="11:00pm" />
                    <Picker.Item label="11:30pm" value="11:30pm" />
                </Picker>
                    </View>
                    <View style={{ width: '33%', alignSelf: 'center' }}>
                        <Text style={styles.itemTitle}>Ends at...</Text>
                <Picker style={styles.pickerStyle}
                    selectedValue={this.state.timeEnd}
                    onValueChange={(itemValue2, itemPosition2) =>
                        this.setState({ timeEnd: itemValue2, choosenIndex2: itemPosition2 })}
                >
                    <Picker.Item label="----" value="" />
                    <Picker.Item label="12:00am" value="12:00am" />
                    <Picker.Item label="12:30am" value="12:30am" />
                    <Picker.Item label="1:00am" value="1:00am" />
                    <Picker.Item label="1:30am" value="1:30am" />
                    <Picker.Item label="2:00am" value="2:00am" />
                    <Picker.Item label="2:30am" value="2:30am" />
                    <Picker.Item label="3:00am" value="3:00am" />
                    <Picker.Item label="3:30am" value="3:30am" />
                    <Picker.Item label="4:00am" value="4:00am" />
                    <Picker.Item label="4:30am" value="4:30am" />
                    <Picker.Item label="5:00am" value="5:00am" />
                    <Picker.Item label="5:30am" value="5:30am" />
                    <Picker.Item label="6:00am" value="6:00am" />
                    <Picker.Item label="6:30am" value="6:30am" />
                    <Picker.Item label="7:00am" value="7:00am" />
                    <Picker.Item label="7:30am" value="7:30am" />
                    <Picker.Item label="8:00am" value="8:00am" />
                    <Picker.Item label="8:30am" value="8:30am" />
                    <Picker.Item label="9:00am" value="9:00am" />
                    <Picker.Item label="9:30am" value="9:30am" />
                    <Picker.Item label="10:00am" value="10:00am" />
                    <Picker.Item label="10:30am" value="10:30am" />
                    <Picker.Item label="11:00am" value="11:00am" />
                    <Picker.Item label="11:30am" value="11:30am" />
                    <Picker.Item label="12:00pm" value="12:00pm" />
                    <Picker.Item label="12:30pm" value="12:30pm" />
                    <Picker.Item label="1:00pm" value="1:00pm" />
                    <Picker.Item label="1:30pm" value="1:30pm" />
                    <Picker.Item label="2:00pm" value="2:00pm" />
                    <Picker.Item label="2:30pm" value="2:30pm" />
                    <Picker.Item label="3:00pm" value="3:00pm" />
                    <Picker.Item label="3:30pm" value="3:30pm" />
                    <Picker.Item label="4:00pm" value="4:00pm" />
                    <Picker.Item label="4:30pm" value="4:30pm" />
                    <Picker.Item label="5:00pm" value="5:00pm" />
                    <Picker.Item label="5:30pm" value="5:30pm" />
                    <Picker.Item label="6:00pm" value="6:00pm" />
                    <Picker.Item label="6:30pm" value="6:30pm" />
                    <Picker.Item label="7:00pm" value="7:00pm" />
                    <Picker.Item label="7:30pm" value="7:30pm" />
                    <Picker.Item label="8:00pm" value="8:00pm" />
                    <Picker.Item label="8:30pm" value="8:30pm" />
                    <Picker.Item label="9:00pm" value="9:00pm" />
                    <Picker.Item label="9:30pm" value="9:30pm" />
                    <Picker.Item label="10:00pm" value="10:00pm" />
                    <Picker.Item label="10:30pm" value="10:30pm" />
                    <Picker.Item label="11:00pm" value="11:00pm" />
                    <Picker.Item label="11:30pm" value="11:30pm" />
                        </Picker>
                    </View>

                    <View style={{ width: '33%', alignSelf: 'center' }}>
                        <Text style={styles.itemTitle}>Category</Text>
                    <Picker style={styles.pickerStyle}
                        selectedValue={this.state.category}
                        onValueChange={(itemValue3, itemPosition3) =>
                            this.setState({ category: itemValue3, choosenIndex3: itemPosition3 })}
                        >
                        <Picker.Item label="----" value="" />
                        <Picker.Item label="Sports" value="sports" />
                        <Picker.Item label="Public Events" value="publicEvents" />
                        <Picker.Item label="Tabletop" value="tabletop" />
                    </Picker>
                    </View>
                    
                    
                </View>

                <View>

                    
                    {this.state.done &&
                        <Text style={{ color: 'green', alignSelf: 'center', width: width - 50, textAlign: 'center' }}>
                            {this.state.done}
                        </Text>}
                    {this.state.errorMessage &&
                        <Text style={{ color: 'red', alignSelf: 'center', width: width - 50, textAlign: 'center' }}>
                            {this.state.errorMessage}
                        </Text>}
                    <TouchableOpacity style={styles.button}
                        title="Change Username" onPress={this.addEvent} >
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Add Event</Text>
                    </TouchableOpacity>

                </View>

                

                
            </ScrollView>

            

            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    titleText: {
        fontSize: 30,
        alignSelf: 'center',
    },
    padding: {
        padding: 10,
    },
    picker: {
        alignSelf: 'center',
        width: width - 50,
    },
    pickerStyle: {
        height: 100,
        width: "100%",
        color: '#344953',
        justifyContent: 'center',
    },
    datePicker: {
        alignSelf: 'center',
        paddingBottom: 50,
    },
    textInput: {
        height: 40,
        width: width - 50,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        borderWidth: 1,
        borderWidth: 1,
        margin: 5,
        padding: 7,
        marginTop: 8,
        alignSelf: 'center'
    },
    itemTitle: {
        fontSize: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: "green",
        padding: 15,
        // backgroundColor: 'rgba(0,0,0, 0.1)',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 0,
        width: width - 50,
        alignSelf: 'center'
    },
});

