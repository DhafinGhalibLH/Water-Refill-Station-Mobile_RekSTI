import React from 'react';
import { Pressable, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { Link } from 'expo-router';

<<<<<<< HEAD:WaterRefillStation/app/(tabs)/index.tsx
export default function Homepage() {
=======
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
>>>>>>> develop:WaterRefillStation/app-example/(tabs)/index.tsx
  return (
    <ImageBackground source={require('./map.png')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 320, height: 109, backgroundColor: '#0B666A', borderRadius: 20, padding: 10, marginTop: 20, marginBottom: 610}}>
            <Text style={{ fontSize: 18, color: '#FFFFFF', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 5 }}>Ahmad Rivai Yahya</Text>
            <Text style={{ fontSize: 14, textAlign: 'left', color: '#FFFFFF', marginTop: 2, marginLeft: 5 }}>18221017</Text>
            <View style={{ width: 137, height: 35, backgroundColor: '#FFFFFF', borderRadius: 10, flexDirection: 'row', marginTop: 10, marginLeft: 160, alignItems: 'center' }}>
                <Image style={{marginLeft: 5}} source={require('./star.png')} />
                <Text style={{ fontSize: 18, color: '#0B666A', marginLeft: 12}}>100 points</Text>
            </View>
        </View> 
        <View style={{ position: 'absolute', left: 0, bottom: -32, shadowColor: "#000", shadowOffset: {width: 0, height: -2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, right: 0, flexDirection: 'row', backgroundColor: '#FFFFFF', height: 90, width: '100%', alignItems: 'center', justifyContent: 'space-around', borderRadius: 20}}>
            <Image source={require('./berandaijo.png')} />
            <Link href="/poin">
                <Image source={require('./poinpage.png')} />
            </Link>
            <Link href="/profil">
                <Image source={require('./profil.png')} />
            </Link>
        </View>
    </ImageBackground>
  );
}
