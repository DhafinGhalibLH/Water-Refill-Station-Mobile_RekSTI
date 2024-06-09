import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { TextStyles } from '../constants/Text';
import { router } from 'expo-router';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavbarProfil } from '@/components/navbar';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { getAuth } from "firebase/auth";
import { Linking } from 'react-native';

export default function Profil() {
    // logged in user email
    const [userEmail, setUserEmail] = useState('');
    
    const moveToPage = (page: string) => {
        // Handle button press
        router.push(page);
    };

    //SignOut Handler
    const handleLogout = async () => {
        await signOut(auth);
    }

    let email = '';
    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        // Mendapatkan informasi pengguna yang sedang login
        if (user !== null) {
            email = user.email!;
        }
        if (email !== null) {
          setUserEmail(email);
        }
    }, []);

    return (
        <View style={styles.backdrop}>
            {/* upper part */}
            <View style={[styles.row, {flex: 2, backgroundColor: '#0B666A', justifyContent: 'space-between', padding: 20}]}>
                <Text style={[TextStyles.heading1, {color: 'white'}]}>Profil</Text>
                <View style={[styles.container, styles.row, {alignSelf: 'flex-start', columnGap: 10, backgroundColor: 'white', borderRadius: 7.5, paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'space-evenly'}]}>
                    <Image source={require('../assets/images/star.png')}></Image>
                    <Text style={[TextStyles.body1, {color: '#0B666A'}]}>100 points</Text>
                </View>
            </View>
            {/* profile image */}
            <Image style={{position: 'absolute', top: '10%', zIndex: 50, borderRadius: 100, alignSelf: 'center', width: 200, height: 200}} source={require('../assets/images/profileImage.png')}/>
            {/* bottom part */}
            <View style={{flex: 5, backgroundColor: 'white'}}>
                {userEmail ? (
                    <Text style={[TextStyles.subtitle1, {color: '#0B666A', alignSelf: 'center', marginTop: 40}]}>{userEmail.split('@')[0]}</Text>
                ) : (
                    <Text>Loading user data...</Text>
                )}                
                <View style={[styles.row, {flex: 1, marginTop: 30, marginHorizontal: 20, columnGap: 20}]}>
                    <TouchableOpacity 
                        onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdQyDBEH9JYhNg55_zWHANhoZQWX8ik4UFyZFO7dqk_ZPQkSQ/viewform?usp=sharing')}
                        style={[styles.container, {flex: 1, alignSelf: 'flex-start', backgroundColor: '#FFA40B'}]}>
                        <Text style={[TextStyles.button, {color: 'white', textAlign: 'center'}]}>Bantuan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert(
                                "Logout Confirmation",
                                "Are you sure you want to logout?",
                                [
                                    {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                    },
                                    { 
                                        text: "OK", 
                                        onPress: () => moveToPage('/') 
                                    }
                                ],
                                { cancelable: false }
                            );
                        }}
                        style={[styles.container, {flex: 1, alignSelf: 'flex-start', backgroundColor: '#FA4D55'}]}
                    >
                        <Text style={[TextStyles.button, {color: 'white', textAlign: 'center'}]}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <NavbarProfil/>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    container: {       
        padding : 25,
        borderRadius: 15,
    },
    row: {
        flexDirection: 'row'
    }
});