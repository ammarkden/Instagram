import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
import { post } from '../public/styles.js'
import DoubleClick from 'react-native-double-click';


export default class Post extends React.Component {
  constructor() {
    super()
    this.state = {
        Comment: []
    }
  }



  render() {
    return (
      <View style={post.container}>
        <View style={post.authorContainer}>
          <View style={post.photoContainer}>
            <TouchableOpacity style={post.authorAvatarContainer}>
              <Image style={post.authorAvatar} source={require('../story/100496736-steve-jobs-march-2011-getty.jpg')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={post.authorNameContainer}>
          <Text style = {post.authorName}>Steve_87</Text>
          </TouchableOpacity>
          <TouchableOpacity style={post.optionsContainer}>
          <Text style = {post.options}>...</Text>
          </TouchableOpacity>

        </View>
        {this.state.posts.length > 1?
        <DoubleClick onClick={this.setLike} >
         <ScrollView horizontal = {true} style = {post.multiPostContainer}>
         <Image style = {post.img} source = {require('./sj.jpg')} />
         <Image style = {post.img} source = {require('./batman.jpg')} />
         <Image style = {post.img} source = {require('./sj.jpg')} />

            </ScrollView>
            </DoubleClick>
            :
             <View>
             <Image style = {post.img} source = {require('./sj.jpg')} />
            </View> }
            <View style = {post.interAction}>
            <View style = {post.likeCommentDirectContainer}>
            <TouchableOpacity>
              <Text onPress = {this.setLike} style = {this.state.likes == false? {...post.likeCommentDirect, ...post.liked}: post.likeCommentDirect}>Like</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style = {post.likeCommentDirect}>Comment</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style = {post.likeCommentDirect}>Direct</Text>
            </TouchableOpacity>
            </View>
            {this.state.likes === false ?<TouchableOpacity style = {post.likesContainer}><Text style = {post.likeres}>{'1 like'}</Text></TouchableOpacity>: false}
            <View style = {post.dateContainer}>
            <Text style = {post.date}>2 days ago</Text>
            </View>
            {this.state.desc != null? <View style = {post.descContainer}>
            <Text style = {post.desc}><Text style = {post.authorName}>Steve_87</Text> hiii</Text>
            </View>: false}

            </View>
      </View>
    )
  }
}


