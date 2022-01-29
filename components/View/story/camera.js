import React from 'react';
import { Button, Image, View, Text, StatusBar, TouchableOpacity, ScrollView, ImagePickerIOS, } from 'react-native';
import { story } from '../public/styles.js'
import * as ImagePicker from 'react-native-image-picker';

export default class Camera extends React.Component {
    constructor() {
        super()
    }
    handleAddStory = () => {
        ImagePickerIOS.openSelectDialog((Option, Response => {
            alert(Response)
        }))
    }
    render() {

        return (
            <View>
            <TouchableOpacity onPress = {this.handleAddStory}>
            <Text  style = {{marginTop: 450, color: 'red', position: 'absolute'}}> click me</Text>
            </TouchableOpacity>
            </View>
        )
    }
}


