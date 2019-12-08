import React, {Component} from 'react'
import {View, Image, StyleSheet,  Button, Text, Linking} from 'react-native'
import Touchable from 'react-native-platform-touchable';



class Tard extends Component {  
    render() {
const {id, name, No_Of_Current_Seasons, imdb, link, Plot, Status} = this.props;

      return (
        <View style={styles.container}>
          <View style={styles.Image}>
          <Image
          style={{height: 400, width:400, borderRadius:50}}
      source={{ uri: `https://raw.githubusercontent.com/bhusallaxman22/Shows/gh-pages/images/${id}.jpg` }}
    />
          </View>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'navy' }}>{id}.{name}{"\n"}</Text>
    <Text style={{ textAlign: 'center', marginTop: 10 }}>No. Of Current Seasons: {No_Of_Current_Seasons}{"\n"}</Text>
    <Text style={{ textAlign: 'center' }}>Runtime Status: {Status}{"\n"}</Text>
          <View style={styles.label}>
            <View style={{ textAlign: 'center', backgroundColor:'pink', height:'500', borderRadius:50 }}>
            <Text style={{ textAlign: 'center' }} >Plot:{"\n"}</Text><Text style={{ textAlign: 'center' }}> {Plot}{"\n"}</Text>
    <Text style={{ textAlign: 'center', fontWeight: 'bold', color:'yellow' }} >IMDB: {imdb}{"\n"}</Text> 
            </View>
          </View>
        <Touchable
          onPress={this._handlePressSite}
          >
          <View >
       <Button title="Link" onPress={ ()=>{ Linking.openURL(`${link}`)}} />
      </View>
        </Touchable>
       </View>
      )
  }
}
const styles = StyleSheet.create ({
  container: {
    marginTop:10,
    flex: 1,
    alignItems: 'center',
    textAlign:"center",
    backgroundColor: 'gray',
    justifyContent:'center',
    borderRadius: 50,
    marginBottom:10,
    height: 50,

  },
  label: {
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  olla: {
 
    textAlign:'center',
    textDecorationLine: 'underline',
    marginBottom: 20,
    marginTop: 20,
  },
  Image : {
    height: 400,

  }
})

export default Tard;