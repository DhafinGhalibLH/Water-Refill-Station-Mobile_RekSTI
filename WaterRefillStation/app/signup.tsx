import React, { useState } from 'react';
import {Stack, router} from 'expo-router';
import { useFonts } from 'expo-font';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import auth from "@react-native-firebase/auth";

export default function SignUpScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () =>{
        auth().createUserWithEmailAndPassword(username, password).then(()=>{
            console.log('User account created!')
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }
        });
    }

    const handleSignUp = () => {
        // Implement your signup logic here
        console.log(`Username: ${username}, Password: ${password}`);
    };

    const handlePress = () => {
        // Handle button press
        router.push('/')
    };

    const [fontsLoaded] = useFonts({
        'Poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });

    return (
        <View style={styles.backdrop}>
            <Stack.Screen />
            <Image 
                source={require('../assets/images/Apk-Icon.png')}
                style={{ alignSelf: 'center', marginBottom: 20}}
            />
            <Text style={[styles.heading1, {marginBottom: 50}]}>Sign Up</Text>
            <Text style={styles.subheading1}>Email</Text>
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Input your SSO email..."
                style={[styles.container, {marginTop: 10, marginBottom: 25}]}
            />
            <Text style={styles.subheading1}>Password</Text>
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Input your SSO password..."
                secureTextEntry
                style={[styles.container, {marginTop: 10}]}
            />
            <View style={{marginTop: 150}}>
                <TouchableOpacity style={[styles.container, {paddingHorizontal: 30, paddingVertical: 20, backgroundColor: '#FFA40B'}]} onPress={handlePress}>
                    <Text style={[styles.subheading1, {alignSelf: 'center'}]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: '#0D787D',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 35,
    },
    container: {
        backgroundColor: 'white',        
        marginBottom: 10,
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 15,
    },
    heading1: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: '400',
    },
    subheading1: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '700',
    },
});