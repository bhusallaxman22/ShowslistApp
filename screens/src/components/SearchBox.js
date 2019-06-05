import React from 'react';
import { SearchBar } from 'react-native-elements';

const SearchBox = ({serachfielld, searchChange}) => {
	return (
	<SearchBar 
	type='search' 
	placeholder='Search Shows' 
	onSearchChange={searchChange}
	/>
		);
};
export default SearchBox;