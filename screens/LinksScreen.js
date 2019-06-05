import React from 'react';
import { ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ImageBackground source= {require('./photo-1518770660439-4636190af475.jpg')} style= {{height: '100%', width: '100%'}}>
      <ScrollView style={styles.container}>
       
        <ExpoLinksView />
      </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'pink',
  },
});
