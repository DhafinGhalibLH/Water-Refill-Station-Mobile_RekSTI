import React from 'react';
import { Pressable, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';

export default function Profil() {
  return (
    <View style= {{ alignItems: 'center', justifyContent: 'center'}}>
        <View style={{ width: 320, height: 109, backgroundColor: '#0B666A', borderRadius: 20, padding: 10, marginTop: 20, marginBottom: 590}}>
            <Text style={{ fontSize: 18, color: '#FFFFFF', textAlign: 'center', fontWeight: 'bold', marginTop: 3, marginLeft: 5 }}>PROFIL</Text>
            <Text style={{ fontSize: 14, textAlign: 'center', color: '#FFFFFF', marginTop: 2, marginLeft: 5 }}>Edit Profilmu!</Text>
            <View style={{ width: 90, height: 30, backgroundColor: '#FF0000', borderRadius: 10, marginTop: 10, marginLeft: 105, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>LOG OUT</Text>
            </View>
        </View> 
        <View style={{ position: 'absolute', left: 0, bottom: -75, shadowColor: "#000", shadowOffset: {width: 0, height: -2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, right: 0, flexDirection: 'row', backgroundColor: '#FFFFFF', height: 90, width: '100%', alignItems: 'center', justifyContent: 'space-around', borderRadius: 20}}>
            <Link href="/">
                <Image source={require('./beranda.png')} />
            </Link>            
            <Link href="/poin">
                <Image source={require('./poinpage.png')} />
            </Link>            
            <Image source={require('./profilijo.png')} />
        </View>
    </View>
  );
}
