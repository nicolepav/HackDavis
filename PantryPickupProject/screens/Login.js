import React from 'react';
import { ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';



function Login ( {navigation} ) {
  return (
 
    <View style={styles.container}>
        
        <Text style={styles.loginWelcome}>
            WELCOME
        </Text>
        <View>
            <TouchableOpacity style={styles.button} mode="contained" onPress={() => navigation.navigate('SecondScreen')}>
                <Text>
                    CAS LOGIN
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    

    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image :{
        marginBottom: 40
    },
    
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    button: {
        backgroundColor: "#FFBF1C",
        textAlign: 'center',
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 15,
    },
    loginWelcome: {
        fontFamily: 'Montserrat',
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '39px',
        textAlign: 'center',
        color: "#F7B156",
    }

     
});

export default Login