import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';

const Stack = createNativeStackNavigator();

const onboarding = ( {navigation}) => {
	return (
		<View style={styles.container}>
		<Text>This is home PONBOARDING</Text>
		<ItemCard />
		<StatusBar style="auto" />
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
