import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';


function Login ( {navigation} ) {

    const [emailtext, onChangeText] = React.useState("enter email address");
    const [number, onChangeNumber] = React.useState(null);

    return (
    
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/pantryLogoBig.png')} 
                style={{ width: 216, height: 216, marginBottom: 50 }}
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
                <TouchableOpacity style={styles.button} mode="contained" onPress={() => navigation.navigate('Main')}>
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
        
    },

    image :{
        marginBottom: 40
    },
    loginWelcome: {
        fontFamily: 'Montserrat.ttf',
        fontWeight: "700",
        fontSize: 32,
        lineHeight: 39,
        textAlign: 'center',
        color: "#F7B257",
        marginBottom: 40,
    },
    resetView: {
        padding: 0,
        margin: 0,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        width: vw(80),
        height: vh(5),
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        width: vw(80),
        height: vh(5),
        color: "#606060",
        marginTop: 5,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#F7B257",
        textAlign: 'center',
        borderRadius: 15,
        width: vw(80),
        height: vh(5),
        justifyContent: 'center',
    },
    
    buttonText: {
        fontFamily: 'Montserrat-Bold.ttf',
        fontWeight: "700",
        fontSize: 20,
        color: "#FFFFFF"
    },
    plainText: {
        fontFamily: 'Montserrat.ttf',
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 20,
        color: "#606060",
        marginTop: 20,
        marginBottom: 0,
        textAlign: 'left',
        width: vw(80),
        paddingLeft: 5,
    },
    

     
});

export default Login