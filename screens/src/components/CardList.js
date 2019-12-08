import React from 'react';
import Tard from './Tard';
import {View, ScrollView} from 'react-native'


const CardList = ({ Shows }) => {

	return (
	<ScrollView style={{flex:1}}>
{
	Shows.map((_user, i) => {
		return (
			<Tard 
			 key={i} 
			 id={Shows[i].id} 
			 name={Shows[i].name} 
			 No_Of_Current_Seasons={Shows[i].No_Of_Current_Seasons}
			 Plot={Shows[i].Plot}
			 Status={Shows[i].Status}
			 imdb={Shows[i].imdb}
			 link={Shows[i].link}
			/>
		);
	}) 
}
	</ScrollView>
		);
}

export default CardList