import React, { Component } from 'react';
import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { SearchBar } from 'react-native-elements';
import Scroll from '../components/Scroll';
import { Shows } from '../components/Shows';
import {View, Text} from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import SearchBox from '../components/SearchBox';

class Vape extends Component {
	constructor() {
		super()
		this.state = {
			Shows: Shows,
			searchfield:'',
		}
	};
onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value})
};

	render () {
		const { Shows, searchfield } = this.state;
		const filteredShows = Shows.filter(show => {
			return show.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !Shows.length ?
<View>
		<Text>LOADING</Text>
		</View> :
		(
			<View>
			<ScrollView>
			<Text style = {{fontWeight:'bold', marginTop: 15, textAlign: 'center', fontSize: 20 }} >SHOWSLIST</Text>
			<SearchBar
	type='search' 
	placeholder='Search Shows' 
	onTextChange={onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value})
}}
	/>
			
			<Scroll>
			<View>
				<CardList Shows={filteredShows}/>
				</View>
				</Scroll>
	
				</ScrollView>
			</View>
		);
		}
}

export default Vape;