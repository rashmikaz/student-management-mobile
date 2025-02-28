import React, { useState } from 'react';
import { Image,View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {useRouter} from "expo-router";

export default function LoginScreen() {

    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        if(username === 'User' && password === 'user'){
            router.replace('/dashboard');
        }
    }
    return (

        <View style={styles.container}>

            <Image
                source={require('../assets/login.jpg')}
                style={styles.logo}
            />

            <Text style={styles.mainText}>Student Management System);</Text>
            <Text style={styles.loginText}>Login</Text>
            <TextInput style={styles.textFields} placeholder='Username' onChangeText={setUsername}/>
            <TextInput style={styles.textFields} placeholder='Password' secureTextEntry onChangeText={setPassword}/>
            <Button  onPress={handleLogin} title='Login' color="#06B6D4"/>
            <Text style={styles.signupText}>new on our service?</Text>
            <Text style={styles.signup}>create an account</Text>

        </View>

    );
}

const styles = StyleSheet.create({
    container :{
      flex:2,
      justifyContent: "center",
        padding: 20
    },

    loginText: {
        fontSize: 24,
        fontWeight: "semibold",
        marginBottom: 20
    },
    textFields :{
      borderWidth: 1,
      padding: 10,
      marginBottom : 10
    },
    logo: {
        width: 350,
        height: 350,
        marginBottom: 20,
        borderRadius: 75,
    },
    mainText: {
        fontSize: 36,
        fontWeight: "bold",
        position:"absolute",
        bottom:520
    },
    signupText: {
        fontSize:15,
        fontWeight: "ultralight",
    },
    signup: {
        fontSize:15,
        fontWeight:"ultralight",
        color:"#06B6D4",
        position:"relative",
        bottom:16,
        left:140
    },


});