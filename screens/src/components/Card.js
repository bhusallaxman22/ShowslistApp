import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, Button, TouchableOpacity, Linking} from 'react-native'
import Touchable from 'react-native-platform-touchable';
import CardFlip from 'react-native-card-flip';


 

class Card extends Component {

  constructor(props,) {
    super(props);
    this.state = {
      isFlipped: false,
    };
   
  }
  
    render() {
const {id, name, No_Of_Current_Seasons, imdb, link, Plot, Status} = this.props;

      return (
        <View style={styles.container}>
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
          <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]} onPress={() => this.card.flip()} >
          <View style={styles.label}>
            <Text style={{ textAlign: 'center' }}>
    <Image
    style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center', marginLeft: 88, marginBottom: 80, marginRight:22}} 
    source = {{uri: `https://raw.githubusercontent.com/bhusalnaresh/Shows/gh-pages/images/${id}.jpg`}}
    alt='shows' /><Text>{"\n"}</Text>
    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'navy' }}>{id}.{name}{"\n"}</Text>
    <Text style={{ textAlign: 'center', marginTop: 10 }}>No. Of Current Seasons: {No_Of_Current_Seasons}{"\n"}</Text>
    <Text style={{ textAlign: 'center' }}>Runtime Status: {Status}{"\n"}</Text>
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card2]} onPress={() => this.card.flip()} >
          <View style={styles.label}>
            <View style={{ textAlign: 'center' }}>
            <Text style={{ textAlign: 'center' }} className="red">Plot:{"\n"}</Text><Text style={{ textAlign: 'center' }} className='bg-gray near-black br3'> {Plot}{"\n"}</Text>
    <Text style={{ textAlign: 'center' }} className="navy">IMDB: {imdb}{"\n"}</Text> 
            </View>
          </View>
          </TouchableOpacity>
        </CardFlip>
        <Touchable
          onPress={this._handlePressSite}>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer:{
    width: 320,
    height: 400,
  },
  card:{
    width: 320,
    height: 400,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
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
  }
})

export default Card;