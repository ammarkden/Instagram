import { StyleSheet } from 'react-native';

let primary = '#000'
let secondary = '#fff'

const header = StyleSheet.create({   
    bar: {                       
        width: '100%',
        height: '12%',
        backgroundColor: primary,
        position: 'absolute',
        justifyContent: 'center',
        zIndex: 2
    }, 
    logoContainer: {
        width: '50%',
        left: 0,
        alignItems:'baseline',
        height: '100%',
        backgroundColor: primary,
        justifyContent: 'center',
    },
    logo: {
        fontWeight: 'bold', 
        fontSize: 30, 
        color: secondary,
        marginLeft: 15,
        marginTop: 40
    },

    toolScontainer: {
        width: '50%',
        right: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',

    },
    tools: {
        fontSize: 20,
        color: secondary,
        marginLeft: 28,
        marginTop: 40,
        fontWeight: 'bold'
    }
  })

  const story = StyleSheet.create({   
    container: {
        width: '100%',
        height: 130,
        backgroundColor: primary,
        marginTop: 105
    },
    storiesContainer: {
        justifyContent: 'center', 
        alignItems: 'baseline',
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1
    }, 
    storyBallContainer: {
        width: 85,
        height: 100,
        backgroundColor: primary,
        justifyContent: 'center',
        marginRight: 5,
        alignContent: 'center',
        alignItems: 'center'
    },
    ball: {
        width: 75,
        height: 75,
        backgroundColor: primary,
        borderRadius: 100, 
        position: 'relative',
    },
    isSeenBall: {
        borderWidth: 1, borderColor: '#8f8f8f'
    },
    default: {
        width:'100%',
        height:'100%',
        borderRadius: 100, 
        transform: [{ scale: 1 }],
        position: 'absolute',
    }, 
    plusContainer: {
        marginTop: 45,
        marginLeft: 55,
        width: 25, 
        height: 25,
        backgroundColor: '#40a9fc',
        position: 'absolute', 
        zIndex: 1,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    plus: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    activeStory: {
        color: 'blue'
    },
    storyText: {
        color: '#fff',
        marginTop: 5,
        textAlign: 'center'
    },
    seenStory: {
        borderColor: primary,
        borderRadius: 100, 
        borderWidth: 2,
        transform: [{ scale: 0.94 }],
    },
    seenStorytext: {
        color: '#8f8f8f',
        marginTop: 5,
        textAlign: 'center'
    },
})



const middle = StyleSheet.create({   
   container: {                       
     backgroundColor: primary,
     height: '100%',
   }, 
   scrollView: {
       width: '100%',
       height: '100%', 
       backgroundColor: primary,
   },
   postContainer: {
       paddingBottom: 100,
       flexDirection: 'column',
       justifyContent: 'center',
       flex: 1,
   }
 })

 const post = StyleSheet.create({
     container: {
         flex: 1,
         marginBottom: 40,
         position: 'relative',
     },
     authorContainer: {
         width: '100%',
         height: 55,
         flexDirection: 'row'
     }, 
     photoContainer: {
         width: '12%',
         height: '100%',
         alignItems: 'center',
         justifyContent: 'center',
     }, 
     authorAvatarContainer: {
        width: 40,
        height: 40,
        borderRadius: 100, 
     },
     authorAvatar: {
        width:'100%',
        height:'100%',
        borderRadius: 100, 
        transform: [{ scale: 1 }],
        position: 'absolute',
     }, 
     authorNameContainer: {
         width: '64%',
         height: '100%',
         alignItems: 'baseline',
         justifyContent: 'center',
         paddingLeft: 5,
     },
     authorName: {
         fontWeight: 'bold',
         color: secondary,
     },
     optionsContainer: {
        width: '24%',
        paddingRight: 15,
        justifyContent: 'center',
        height: '100%'
     },
     options: {
        color: secondary,
        fontWeight: 'bold',
        textAlign: 'right',
        justifyContent: 'center',
        marginBottom: 7,
        fontSize: 20
    },
    multiPostContainer: {
        width: 400,
        height: 400,
        backgroundColor: primary
    },
    img: {
        width: 450,
        height: 450
    },

    likeCommentDirectContainer: {
        width: '70%', 
        flexDirection: 'row',
        paddingLeft: 10
    },
    likeCommentDirect: {
        color: secondary, 
        fontWeight: 'bold',
        marginRight: 15,
        marginTop: 8,
        color: secondary,
    },
    likesContainer: {
        paddingLeft: 10,
        width: '100%',
        justifyContent: 'center'
    },
    likeres: {
        marginTop: 5,
        fontWeight: 'bold',
        color: secondary
    },
    liked: {
        color: '#ec4a57'
    },
    dateContainer: {
        width: '100%',
        paddingLeft: 10,
    },
    date: {
        color: '#8f8f8f',
        marginTop: 5,
        fontSize: 10
    }, 
    descContainer: {
        width: '100%', 
        marginTop: 2.5,
        justifyContent: 'center',
        paddingLeft: 10
    }, 
    desc: {
        color: secondary
    }
 })

 const nav = StyleSheet.create({   
    bar: {                       
      width: '100%',
      height: 80,
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',

    },
    iconsContainer: {
        display: 'flex',
        height: '100%',
        backgroundColor: primary,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    textContainer: {
        flexWrap: 'nowrap',
        flex: 1,
    },
    text: {
        color: secondary, 
        fontWeight: 'bold',
        fontSize: 15

    }
  })
  




 export {middle, nav, header, story, post}