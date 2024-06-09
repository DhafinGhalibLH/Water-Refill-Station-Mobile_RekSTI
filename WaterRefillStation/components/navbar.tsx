import React from 'react';
import { StyleSheet } from 'react-native';
import { Pressable, Text, View, Image} from 'react-native';
import { Link, router } from 'expo-router';

export function NavbarHome() {
    const moveToPage = (page: string) => {
        // Handle button press
        router.push(page);
    };

    return (
    <View style={[styles.container, styles.row, {position:'absolute', zIndex: 40,bottom: 0, width: '100%', backgroundColor: 'white', justifyContent: 'space-around'}]}>
        <Image source={require('../assets/images/berandaijo.png')}></Image>
        <Pressable onPress={() => moveToPage('/poin')}>
            <Image source={require('../assets/images/poinpage.png')}></Image>
        </Pressable>
        <Pressable onPress={() => moveToPage('/profil')}>
            <Image source={require('../assets/images/profil.png')}></Image>
        </Pressable>
    </View>
    );
}

export function NavbarProfil() {
    const moveToPage = (page: string) => {
        // Handle button press
        router.push(page);
    };

    return (
    <View style={[styles.container, styles.row, {position:'absolute', bottom: 0, width: '100%', backgroundColor: 'white', justifyContent: 'space-around'}]}>
        <Pressable onPress={() => moveToPage('/homepage')}>
            <Image source={require('../assets/images/beranda.png')}></Image>
        </Pressable>
        <Pressable onPress={() => moveToPage('/poin')}>
            <Image source={require('../assets/images/poinpage.png')}></Image>
        </Pressable>
        <Image source={require('../assets/images/profilijo.png')}></Image>
    </View>
    );
}

export function NavbarPoin() {
    const moveToPage = (page: string) => {
        // Handle button press
        router.push(page);
    };

    return (
    <View style={[styles.container, styles.row, {position:'absolute', bottom: 0, width: '100%', backgroundColor: 'white', justifyContent: 'space-around'}]}>
        <Pressable onPress={() => moveToPage('/homepage')}>
            <Image source={require('../assets/images/beranda.png')}></Image>
        </Pressable>
        <Image source={require('../assets/images/poinijo.png')}></Image>
        <Pressable onPress={() => moveToPage('/profil')}>
            <Image source={require('../assets/images/profil.png')}></Image>
        </Pressable>
    </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    container: {
        padding: 25,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        elevation: 10,
    },
    row: {
        flexDirection: 'row'
    }
});