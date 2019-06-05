import React from 'react';
import Card from './Card';
import {View} from 'react-native'


const CardList = ({ Shows }) => {

	return (
	<View>
{
	Shows.map((_user, i) => {
		return (
			<Card 
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
	</View>
		);
}

export default CardList