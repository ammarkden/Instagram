import React from 'react';
import { Image, View, Text, StatusBar, TouchableOpacity, ScrollView, } from 'react-native';
import { story } from '../public/styles.js'
import { RNCamera } from 'react-native-camera'
import { Camera } from './camera.js'

export default class Story extends React.Component {
    constructor() {
        super()
        this.state = {
            isStory: false,
            stories: []
        }
    }

    componentDidMount() {
        if (this.state.stories.length > 0) {
            false
        } else {
            this.setState({
                isStory: <View style={story.plusContainer}>
                    <Text style={story.plus}>+</Text>
                </View>
            })
        }
    }

    render() {

        return (
            <ScrollView style={story.container} horizontal={true}>
                <View style={story.storiesContainer}>
                    <View style={story.storyBallContainer}>
                        <TouchableOpacity onPress={this.state.isStory ? this.props.renderCamera : this.props.renderStories}><View style={story.ball}>
                            <Image style={story.default} source={require('./default.jpg')} />
                        </View>
                            {this.state.isStory}
                            <View><Text style={story.seenStorytext}>Your Story</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={story.storyBallContainer}>
                        <TouchableOpacity onPress={this.props.renderStories}><View style={{ ...story.ball, ...story.isSeenBall }}>
                            <Image style={{ ...story.default, ...story.seenStory }} source={require('./2.jpg')} /></View>
                            <View><Text style={story.seenStorytext}>Steve_87</Text></View>
                        </TouchableOpacity>
                    </View>

                    <View style={story.storyBallContainer}>
                        <TouchableOpacity onPress={this.props.renderStories}><View style={{ ...story.ball, ...story.isSeenBall }}>
                            <Image style={{ ...story.default, ...story.seenStory }} source={require('./3.jpg')} /></View>
                            <View><Text style={story.seenStorytext}>Gates.ms</Text></View>
                        </TouchableOpacity>
                    </View>


                    <View style={story.storyBallContainer}>
                        <TouchableOpacity onPress={this.props.renderStories}><View style={{ ...story.ball, ...story.isSeenBall }}>
                            <Image style={{ ...story.default, ...story.seenStory }} source={require('./100496736-steve-jobs-march-2011-getty.jpg')} /></View>
                            <View><Text style={story.seenStorytext}>Jobs</Text></View>
                        </TouchableOpacity>
                    </View>


                    <View style={story.storyBallContainer}>
                        <TouchableOpacity onPress={this.props.renderStories}><View style={{ ...story.ball, ...story.isSeenBall }}>
                            <Image style={{ ...story.default, ...story.seenStory }} source={require('./5.jpg')} /></View>
                            <View><Text style={story.seenStorytext}>Batman</Text></View>
                        </TouchableOpacity>
                    </View>



                </View>
            </ScrollView>
        )
    }
}


