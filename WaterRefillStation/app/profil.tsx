import React from 'react';
import { TextStyles } from '../constants/Text';
import { Link, router } from 'expo-router';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavbarProfil } from '@/components/navbar';

export default function Profil() {
    const moveToPage = (page: string) => {
        // Handle button press
        router.push(page);
    };

    return (
        <View style={styles.backdrop}>
            {/* upper part */}
            <View style={[styles.row, {flex: 2, backgroundColor: '#0B666A', justifyContent: 'space-between', padding: 20}]}>
                <Text style={[TextStyles.heading1, {color: 'white'}]}>Profil</Text>
                <View style={[styles.container, styles.row, {alignSelf: 'flex-start', columnGap: 10, backgroundColor: 'white', borderRadius: 7.5, paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'space-evenly'}]}>
                    <Image source={require('../assets/images/star.png')}></Image>
                    <Text style={[TextStyles.body1, {color: '#0B666A'}]}>xxx points</Text>
                </View>
            </View>
            {/* profile image */}
            <Image style={{position: 'absolute', top: '10%', zIndex: 50, borderRadius: 100, alignSelf: 'center', width: 200, height: 200}} source={require('../assets/images/profileImage.png')}/>
            {/* bottom part */}
            <View style={{flex: 5, backgroundColor: 'white'}}>
                <View style={[styles.row, {flex: 1, marginTop: 70, marginHorizontal: 20, columnGap: 20}]}>
                    <TouchableOpacity onPress={() => moveToPage('/login')} style={[styles.container, {flex: 1, alignSelf: 'flex-start', backgroundColor: '#FFA40B'}]}>
                        <Text style={[TextStyles.button, {color: 'white', textAlign: 'center'}]}>Edit Profil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={[styles.container, {flex: 1, alignSelf: 'flex-start', backgroundColor: '#15C2C9'}]}>
                        <Text style={[TextStyles.button, {color: 'white', textAlign: 'center'}]}>Bantuan</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 4, marginHorizontal: 30, rowGap: 10}}>
                    <Text>
                        <Text style={[TextStyles.subtitle1, {color: '#0B666A'}]}>Nama  :  </Text>
                        <Text style={[TextStyles.body1]}>Dhafin Ghalib Luqman Hakim</Text>
                    </Text>
                    <Text>
                        <Text style={[TextStyles.subtitle1, {color: '#0B666A'}]}>NIM     :  </Text>
                        <Text style={[TextStyles.body1]}>18221023</Text>
                    </Text>
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