import React from 'react';
import {View, Text, StatusBar, TouchableOpacity, ScrollView,} from 'react-native';
import { header } from '../public/styles.js'

export default class Header extends React.Component {
  constructor() {
    super()
  }
  render() {
    return(

        <View style = {header.bar}>
        <View style = {header.logoContainer}>
        <TouchableOpacity>
         <Text style = {header.logo}>Instagram</Text>
         </TouchableOpacity>
         </View>
         
         <View style = {header.toolScontainer}>
         <TouchableOpacity>
         <Text style = {header.tools}>Likes</Text>
         </TouchableOpacity>

         <TouchableOpacity>
         <Text style = {header.tools}>Direct</Text>
         </TouchableOpacity>
         </View>
        </View>
    )
  }
}


