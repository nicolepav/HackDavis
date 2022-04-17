import React from 'react';
import { ScrollView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';



function Login ( {navigation} ) {
  return (
 
    <View style={styles.container}>
       <View style={styles.textWrapper}>
        <Text style={styles.loginWelcome}>
                WELCOME
            </Text>
            <Text style={styles.plainText}>
                Please login with your UC Davis email
            </Text>
        </View> 
       
        <View>
            <TouchableOpacity style={styles.button} mode="contained" onPress={() => navigation.navigate('SecondScreen')}>
                <Text style={styles.buttonText} >
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
        borderColor: 'black',
        borderWidth: 1,
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
        backgroundColor: "#F7B257",
        textAlign: 'center',
        borderRadius: 15,
        width: '80vw',
        height: '5vh',
        justifyContent: 'center',
    },
    loginWelcome: {
        fontFamily: 'Montserrat-Bold.ttf',
        fontWeight: 700,
        fontSize: '32px',
        lineHeight: '39px',
        textAlign: 'center',
        color: "#F7B257",
    },
    buttonText: {
        fontFamily: 'Montserrat-Bold.ttf',
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '16px',
        color: "#FFFFFF"
    },
    plainText: {
        fontFamily: 'Montserrat.ttf',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '20px',
        color: "#000000",
        margin: '20px',
    },
   

     
});

export default Login