import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'

const Home = () => {
    return (
        // <NavigationContainer>
            <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            </View>
        // </NavigationContainer>
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

  