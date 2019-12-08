import React from 'react';
import {StyleSheet, View, Text, Linking, Button } from 'react-native';
import Touchable from 'react-native-platform-touchable';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };

  render() {
    return (
      <View style={{backgroundColor:'aqua'}}>
      <Text style={styles.header}>Settings</Text>
      <Text style={styles.info}>This is a Application Built with React Native.
      Depection of website: </Text>
      <Touchable
          style={styles.link}
>
          <Button title='This Site' onPress={() =>Linking.openURL('https://bhusallaxman22.github.io/Shows')} />         
        </Touchable>
      </View>
    );
  }

  
};

const styles = StyleSheet.create ({
    header: {
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
      fontSize: 32

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
      textDecorationLine: 'underline'
    }
})
