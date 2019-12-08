import React from 'react';
import {
  ScrollView,
} from 'react-native';
import Vape from './src/container/App'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
 

 render() {
     return (
         <ScrollView>
         <Vape/>
         </ScrollView>
     )
 }
        
}