import React from 'react';
import { StyleSheet, FlatList, Linking, View, Text, Button } from 'react-native';
import Touchable from 'react-native-platform-touchable';



export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <View>
  <Text style={styles.text}>This is the Links Page:</Text>
  <FlatList
          data={[
            {key: 'Facebook', link:'https://facebook.com/l.b057'},
            {key: 'Twitter', link:'https://twitter.com/laxmanbhusal22'},
            {key: 'GitHub', link:'https://github.com/bhusallaxman22'},
            {key: 'Instagram', link:'https://instagram.com/lakshman.22'},
            {key: 'Website', link:'https://laxmanbhusalonline.top'},

          ]}
          renderItem={({item}) =><View style={styles.aaa}><Touchable><Button style={styles.button}  title={item.key} onPress={ ()=>{ Linking.openURL(`${item.link}`)}}/></Touchable></View>}
        />
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    justifyContent: 'center',
    alignContent: 'center'
  },
text: {
fontSize: 30,
fontWeight: 'bold',
textAlign: 'center'
},
aaa:{
  marginTop: 20,
  // width:90,
  height: 80,
  // marginLeft: 700,
}
});
