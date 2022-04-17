import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


function Login ( {navigation} ) {

    const [emailtext, onChangeText] = React.useState("enter email address");
    const [number, onChangeNumber] = React.useState(null);

    return (
    
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/pantryLogoBig.png')} 
                style={{ width: '216px', height: '216px', marginBottom: '50px' }}
            />
            
            <View style={styles.textWrapper}>
                <Text style={styles.loginWelcome}>
                    WELCOME
                </Text>
                
            </View> 
        
            <View style={styles.resetView}>
                <Text style={styles.plainText}>
                    UC Davis Email
                </Text>
                <TextInput
                    value={emailtext}
                    style={styles.input}
                    onChangeText={onChangeText}
                />
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
    
    resetView: {
        padding: 0,
        margin: 0,
    },
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
        color: "#606060",
        marginTop: '20px',
        marginBottom: '0px',
        textAlign: 'left',
        width: '80vw',
        borderWidth: 1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        width: '80vw',
        height: '5vh',
        color: "#606060"
      },

     
});

export default Login