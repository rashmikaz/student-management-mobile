import {Button, Image, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";
import {router, useRouter} from "expo-router";


export default function Register() {


    function login(){
        router.replace('/dashboard');
    }

    return (

        <View style={styles.container}>

            <Image
                source={require('../assets/login.jpg')}
                style={styles.logo}
            />

            <Text style={styles.mainText}>Student Management System);</Text>
            <Text style={styles.loginText}>Signup</Text>
            <TextInput style={styles.textFields} placeholder='Username' />
            <TextInput style={styles.textFields} placeholder='Password' />
            <Button   title='Register' color="#06B6D4"/>
            <Text style={styles.signupText}>login for our service?</Text>
            <Text onPress={login} style={styles.signup}>login</Text>

        </View>
    )
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