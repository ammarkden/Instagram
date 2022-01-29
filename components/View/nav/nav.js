import React from 'react';
import {View, Text, StatusBar, TouchableOpacity,} from 'react-native';
import { nav } from '../public/styles.js'
import Home from '../home.js'
export default class Nav extends React.Component {
  constructor() {
    super()
  }
  render() {
    return(
        <View style = {nav.bar}>
        <TouchableOpacity onPress = {this.props.setComponent} style = {nav.textContainer}><View style = {nav.iconsContainer}><Text style = {nav.text}>Home</Text></View></TouchableOpacity>
        <TouchableOpacity style = {nav.textContainer}><View style = {nav.iconsContainer}><Text style = {nav.text}>Search</Text></View></TouchableOpacity>
        <TouchableOpacity style = {nav.textContainer}><View style = {nav.iconsContainer}><Text style = {nav.text}>Add Post</Text></View></TouchableOpacity>
        <TouchableOpacity style = {nav.textContainer}><View style = {nav.iconsContainer}><Text style = {nav.text}>Shop</Text></View></TouchableOpacity>
        <TouchableOpacity style = {nav.textContainer}><View style = {nav.iconsContainer}><Text style = {nav.text}>Profile</Text></View></TouchableOpacity>

        </View>
    )
  }
}


