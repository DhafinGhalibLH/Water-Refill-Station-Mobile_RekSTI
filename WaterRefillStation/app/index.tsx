import React from 'react';
import { TextStyles } from '../constants/Text';
import { Pressable, Text, View, Image, StyleSheet, ImageBackground} from 'react-native';
import Animated from 'react-native-reanimated';
import { Link, router } from 'expo-router';
import { useFonts } from 'expo-font';
import { NavbarHome } from '../components/navbar';

export default function HomeScreen() {
    const [fontsLoaded] = useFonts({
        'Poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
    <ImageBackground source={require('../assets/images/map.png')} style={styles.backdrop}>
        <View style={[styles.container, {position:'absolute', top: 25, left: 25, right: 25, backgroundColor: '#0B666A',}]}>
            <Text style={[TextStyles.subtitle1, {color: 'white'}]}>Dhafin Ghalib Luqman Hakim</Text>
            <Text style={[TextStyles.body1, {color: 'white'}]}>18221023</Text>
            <View style={[styles.container, styles.row, {alignSelf: 'flex-end', columnGap: 10, backgroundColor: 'white', borderRadius: 7.5, padding: 10, justifyContent: 'space-evenly'}]}>
                    <Image source={require('../assets/images/star.png')}></Image>
                    <Text style={[TextStyles.body1, {color: '#0B666A'}]}>xxx points</Text>
            </View>
        </View>
        <NavbarHome/>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    container: {       
        padding : 25,
        borderRadius: 15,
    },
    row: {
        flexDirection: 'row'
    }
});