import React from 'react'
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native'

import ItemCard from '../components/Item'

// must take navigation prop
const Home = ( {navigation}) => {
	return (
		<View style={styles.container}>
			<Text>This is home -- Open up App.js to start working on your app!</Text>
			<ItemCard />
			<StatusBar style="auto" />

			<Button
				title="Go to Jane's profile"
				onPress={() =>
					navigation.navigate('Onboarding', { name: 'Onboarding' })
				}
			/>
		</View>

	);
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Home;

  