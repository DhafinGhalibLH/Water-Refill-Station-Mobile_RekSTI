import React, { useState, useEffect } from 'react';
import { TextStyles } from '../constants/Text';
import { Text, View, Image, StyleSheet, Button, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import { Link, router } from 'expo-router';
import { useFonts } from 'expo-font';
import { NavbarHome } from '../components/navbar';
import { getAuth } from "firebase/auth";

export default function HomeScreen() {
    // logged in user email
    const [userEmail, setUserEmail] = useState('');

    // set modal visible
    const [modalVisible, setModalVisible] = useState(false);

    // selected marker
    const [selectedStation, setSelectedStation] = useState({ title: '', location: '', status: '', temperature: 0, pH: 0 });

    // load fonts
    const [fontsLoaded] = useFonts({
        'Poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    // function to handle marker press
    const handleMarkerPress = (title: string, location: string, status: string, temperature: number, pH: number) => {
        // make it show a popup
        setSelectedStation({ title, location, status, temperature, pH });
        setModalVisible(true);
    }

    // function to handle close modal
    const handleCloseModal = () => {
        setModalVisible(false);
    };

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
        <View style={[styles.container, {position:'absolute', zIndex: 50, top: 25, left: 25, right: 25, backgroundColor: '#0B666A',}]}>
            <Text style={[TextStyles.subtitle1, {color: 'white'}]}>Halo,</Text>
            {userEmail ? (
                <Text style={[TextStyles.subtitle1, {color: 'white', fontWeight: 900}]}>{userEmail.split('@')[0]}</Text>
            ) : (
                <Text>Loading user data...</Text>
            )}
            <View style={[styles.container, styles.row, {alignSelf: 'flex-end', columnGap: 10, backgroundColor: 'white', borderRadius: 7.5, padding: 10, justifyContent: 'space-evenly'}]}>
                    <Image source={require('../assets/images/star.png')}></Image>
                    <Text style={[TextStyles.body1, {color: '#0B666A'}]}>100 points</Text>
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
                onSelect={() => handleMarkerPress('Water Refill Station #1', 'GKU 1', 'Unavailable', 25, 7)}
                coordinate={{latitude: -6.929226730548189, longitude: 107.76925632004817}}>
            </Marker>
            <Marker 
                title="Water Refill Station #2" 
                onSelect={() => handleMarkerPress('Water Refill Station #2', 'GKU 3', 'Available', 21, 7)}
                coordinate={{latitude: -6.927149693129453, longitude: 107.77001716996337}}>
            </Marker>
            <Marker 
                title="Water Refill Station #3" 
                onSelect={() => handleMarkerPress('Water Refill Station #3', 'Asrama ITB', 'Available', 20, 7)}
                coordinate={{latitude: -6.926217, longitude: 107.768548}}>
            </Marker>
        </MapView>

        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, height: 380, width: 350 }}>
                    <Text style={[TextStyles.heading1, {color: '#0B666A', marginBottom: 25}]}>{selectedStation.location}</Text>
                    <View style={{width: 305, height: 110, backgroundColor: selectedStation.status === 'Available' ? '#63CCA2' : '#FA4D55', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 15}}>
                        <Text style={{ fontSize: 48, fontWeight: '600', color: 'black' }}>{selectedStation.status}</Text>
                        <Text style={[TextStyles.body2, {color: 'black', marginTop: 5}]}>Status</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <View style={{width: 145, height: 110, backgroundColor: 'rgba(11, 102, 106, 0.1)', borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontSize: 48, fontWeight: '600', color: '#0B666A' }}>{selectedStation.temperature}°C</Text>
                            <Text style={[TextStyles.body2, {color: '#0B666A', marginTop: 5}]}>Temperature</Text>
                        </View>
                        <View style={{width: 145, height: 110, backgroundColor: 'rgba(11, 102, 106, 0.1)', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginLeft: 15, marginBottom: 15}}>
                            <Text style={{ fontSize: 48, fontWeight: '600', color: '#0B666A' }}>{selectedStation.pH}</Text>
                            <Text style={[TextStyles.body2, {color: '#0B666A', marginTop: 5}]}>pH</Text>
                        </View>
                    </View>
                    <Button title="Close" onPress={handleCloseModal} />
                </View>
                </View>
            </Modal>
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