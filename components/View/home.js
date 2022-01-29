import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Dimensions,} from 'react-native';
import { middle } from './public/styles.js'

//Modules 
import Story from './story/story.js'
import Header from './header/header.js'
import Post from './post/post.js'
export default class Home extends React.Component {
  constructor() {
    super()
  }


  render() {
    return(
      <View style = {middle.container}>
      <Header/>
      <ScrollView style = {middle.scrollView}>
      <Story renderCamera = {this.props.renderCamera} />
      <View style = {middle.postContainer}>
      <Post />
      <Post />
      <Post />
      <Post />
      </View>

      </ScrollView>
      </View>
    )
  }
}


