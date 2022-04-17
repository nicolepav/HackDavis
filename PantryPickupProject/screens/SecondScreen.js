import React from 'react';
import { StyleSheet, View } from 'react-native';
import HorizontalScroll from '../components/HorizontalScroll';
import {NavigationContainer} from '@react-navigation/native'
import Tabs from './Tabs';


function SecondScreen () {
  return (   
    <View style={styles.container}>
      <HorizontalScroll/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',  
  },
  card: {
    width: '90%'
  }
});

export default SecondScreen;

<View style={styles.container}>
        <HorizontalScroll/>
</View>
