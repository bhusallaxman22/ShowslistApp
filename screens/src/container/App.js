import React, { Component } from 'react';
import CardList from '../components/CardList';
import { TextInput } from 'react-native';
import {View, Text} from 'react-native'
import Scroll from '../components/Scroll'

class Vape extends Component {
	constructor() {
		super()
		this.state = {
			Shows: [],
			searchfield:'',
		}
	};
	componentDidMount() {
		fetch('https://raw.githubusercontent.com/bhusallaxman22/showslistJson/master/Shows.json')
		  .then(response=> response.json())
		  .then(Shows => {this.setState({ Shows: Shows})});
	  }

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value});
};
	render () {
		const { Shows, searchfield } = this.state;
		const filteredShows = Shows.filter(show => {
			return show.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		return !Shows.length ?
<View>
		<Text style={{fontSize:100, color:'green', fontWeight: '900'}}>LOADING...</Text>
		</View> :
		(
			<View>
			<Text style = {{fontWeight:'bold', marginTop: 15, textAlign: 'center', fontSize: 35, height:80, color:'red'}} >SHOWSLIST</Text>
			<TextInput
	style={{height:40, borderStyle:'solid', borderWidth:5, borderRadius:40, fontSize:35}}
	type='search' 
	placeholder='Search Shows' 
	onChange = {event => this.setState({searchfield: event.target.value})}/>
	<Scroll>
					<CardList Shows={filteredShows}/>
					</Scroll>
			</View>

		);
		}
}

export default Vape;