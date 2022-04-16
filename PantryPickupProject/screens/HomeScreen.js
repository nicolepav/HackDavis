import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function HomeScreen ( {navigation} ) {
  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Content>
          <TouchableOpacity style={styles.button} mode="contained" onPress={() => navigation.navigate('SecondScreen')}>
            <Text> CAS LOGIN PLS </Text>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  button: {
    backgroundColor: "#FFBF1C",

  }

});

export default HomeScreen