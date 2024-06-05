import React from 'react';
import { TextStyles } from '../constants/Text';
import { Pressable, Text, View, Image, StyleSheet, ImageBackground} from 'react-native';
import Animated from 'react-native-reanimated';
import MapView, { Marker } from 'react-native-maps'
import { Link, router } from 'expo-router';
import { useFonts } from 'expo-font';
import { NavbarHome } from '../components/navbar';

export default function HomeScreen() {
    // load fonts
    const [fontsLoaded] = useFonts({
        'Poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    // function to handle marker press
    const handleMarkerPress = () => {
        // make it show a popup
        return (
            <View style={[styles.container, {position: 'absolute', bottom: 0, zIndex: 50, backgroundColor: 'white',}]}>
                <Text>Water Refilll Station</Text>
            </View>
        );
    }

    return (
    <View style={styles.backdrop}>
        <View style={[styles.container, {position:'absolute', zIndex: 50, top: 25, left: 25, right: 25, backgroundColor: '#0B666A',}]}>
            <Text style={[TextStyles.subtitle1, {color: 'white'}]}>Dhafin Ghalib Luqman Hakim</Text>
            <Text style={[TextStyles.body1, {color: 'white'}]}>18221023</Text>
            <View style={[styles.container, styles.row, {alignSelf: 'flex-end', columnGap: 10, backgroundColor: 'white', borderRadius: 7.5, padding: 10, justifyContent: 'space-evenly'}]}>
                    <Image source={require('../assets/images/star.png')}></Image>
                    <Text style={[TextStyles.body1, {color: '#0B666A'}]}>xxx points</Text>
            </View>
        </View>
        <MapView style={{width:'100%', height:'100%'}} initialRegion={{
            latitude: -6.928022415416119, 
            longitude: 107.76908863949762,
            latitudeDelta: 0.01,
            longitudeDelta: 0.005,
        }}>
            <Marker 
                title="Water Refill Station #1" 
                onSelect={handleMarkerPress}
                coordinate={{latitude: -6.929226730548189, longitude: 107.76925632004817}}>
            </Marker>
            <Marker 
                title="Water Refill Station #1" 
                onSelect={handleMarkerPress}
                coordinate={{latitude: -6.927149693129453, longitude: 107.77001716996337}}>
            </Marker>
        </MapView>
        <NavbarHome/>
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
        padding : 25,
        borderRadius: 15,
    },
    row: {
        flexDirection: 'row'
    }
});