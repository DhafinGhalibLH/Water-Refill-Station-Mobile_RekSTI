import React, { useState } from 'react';
import {Stack, router} from 'expo-router';
import { useFonts } from 'expo-font';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth }  from '../config/firebase';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        // Implement your login logic here
        if (email && password ) {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                router.push('/homepage');
            } catch (err) {
                console.error('Failed to sign in');  
            }
        };
    }

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
            <Text style={[styles.heading1, {marginBottom: 50}]}>Login</Text>
            <Text style={styles.subheading1}>Email</Text>
            <TextInput
                inputMode='email'
                value={email}
                onChangeText={value=> setEmail(value)}
                placeholder="Input your email..."
                style={[styles.container, {marginTop: 10, marginBottom: 25}]}
            />
            <Text style={styles.subheading1}>Password</Text>
            <TextInput
                value={password}
                onChangeText={value=> setPassword(value)}
                placeholder="Input your password..."
                secureTextEntry={true}
                style={[styles.container, {marginTop: 10}]}
            />
            <View style={{marginTop: 150}}>
                <TouchableOpacity style={[styles.container, {paddingHorizontal: 30, paddingVertical: 20, backgroundColor: '#FFA40B'}]} onPress={handleSubmit}>
                    <Text style={[styles.subheading1, {alignSelf: 'center'}]}>Login</Text>
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