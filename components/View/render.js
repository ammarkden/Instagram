import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions,} from 'react-native';
import { middle } from './public/styles.js'

//Components 
import Home from './home'
import Camera from './story/camera.js'
import Nav from './nav/nav.js'
//End Components 

export default class Render extends React.Component {
  constructor() {
    super()
    this.state = {
        component: Home
    }}

  setComponent = (c) => {
      this.setState({
          component: c
      })
}

  render() {
    return(
        <View>
        {< this.state.component renderCamera = {()=> {this.setComponent(Camera)}} />}
        <Nav setComponent = {() => {this.setComponent(Home)}} />
        </View>
    )
  }
}


