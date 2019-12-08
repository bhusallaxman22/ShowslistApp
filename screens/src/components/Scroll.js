import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';


const Scroll = (props) => {
	return (
<SafeAreaView>
<ScrollView style={{height:1000, flex:1, borderStyle:'solid', borderWidth:5}}>
{props.children}
</ScrollView>
</SafeAreaView>	

	);
}

export default Scroll;