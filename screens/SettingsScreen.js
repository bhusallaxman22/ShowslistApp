import React from 'react';
import {StyleSheet, View, Text, ImageBackground } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { WebBrowser } from 'expo';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };

  render() {
    return (
      <ImageBackground source= {require('./photo-1518770660439-4636190af475.jpg')} style= {{height: '100%', width: '100%'}}>
      <View style={{backgroundColor:'aqua'}}>
      <Text style={styles.header}>Settings</Text>
      <Text style={styles.info}>This is a Application Built with React Native.
      Depection of website: </Text>
      <Touchable
          style={styles.link}
          onPress={this._handlePressSite}>
          <View >
              <Text style={styles.olla}>
             This Site.
              </Text>
              
            </View>
         
        </Touchable>
        
     
      </View>
      </ImageBackground>
    );
  }
  _handlePressSite = () => {
    WebBrowser.openBrowserAsync('https://bhusalnaresh.github.io/Shows');
  };

  
};

const styles = StyleSheet.create ({
    header: {
      fontWeight: 'bold',
      textAlign: 'center'

    },
    info: {
      fontSize: 15,
      marginTop: 10,
      textAlign: 'center',
    },
    link:  {
      marginTop:20,
      borderColor: 'grey',
      borderRadius: 50,
    },
    olla: {
 
      textAlign:'center',
      // justifyContent: 'center',
      // alignItems: 'center',
      textDecorationLine: 'underline'
    }
})
