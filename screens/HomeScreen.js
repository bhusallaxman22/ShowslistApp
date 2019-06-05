import React from 'react';
import {
//   //Image,
//   //Platform,
//   ScrollView,
//   StyleSheet,
   Text,
  //TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import Vape from './src/container/App'
// import { WebBrowser } from 'expo';

// import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
 

 render() {
     return (
      <ImageBackground source= {require('./photo-1518770660439-4636190af475.jpg')} style= {{height: '100%', width: '100%'}}>
         <View>
         <Vape />
         </View>
         </ImageBackground>
     )
 }
        
}