import React from 'react';
import { Pressable, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Link } from 'expo-router';

export default function Poin() {
  return (
    <View>
    <ScrollView>
        <View style={{ flexDirection: 'row'}}>
            <Text style={{ fontSize: 20, color: '#0B666A', textAlign: 'left', fontWeight: 'bold', marginTop: 3, marginLeft: 20 }}>Daftar Poin</Text>
            <View style={{ flexDirection: 'row', width: 137, height: 43, backgroundColor: '#0B666A', borderRadius: 10, padding: 10, marginLeft: 110}}>
                <Image style={{marginLeft: 5, width: 23, height: 23}} source={require('./star.png')} />
                <Text style={{ fontSize: 18, color: '#FFFFFF', textAlign: 'left', marginLeft: 8 }}>100 points</Text>
            </View> 
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', width: 337, height: 92, backgroundColor: 'rgba(11, 102, 106, 0.1)', borderRadius: 20, padding: 10, marginTop: 30, marginBottom: 15}}>
                <Image style={{width: 102, height: 70, marginLeft: 2}} source={require('./bengbeng.png')} />
                <View style={{marginLeft: 15}}>
                    <Text style={{ fontSize: 16, color: '#FFA40B', textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>XX Poin</Text>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 7}}>Snack ABCD</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={{width: 16, height: 16, marginTop: 7}} source={require('./location.png')} />
                        <Text style={{ fontSize: 12, color: '#0B666A', textAlign: 'left', marginTop: 7, marginLeft: 5}}>Kantin GKU 2</Text>
                    </View>
                </View>                    
                <Image style={{width: 23, height: 23, marginLeft: 75}} source={require('./star.png')} />
            </View>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', width: 337, height: 92, backgroundColor: 'rgba(11, 102, 106, 0.1)', borderRadius: 20, padding: 10, marginBottom: 20}}>
                <Image style={{width: 102, height: 70, marginLeft: 2}} source={require('./bengbeng.png')} />
                <View style={{marginLeft: 15}}>
                    <Text style={{ fontSize: 16, color: '#FFA40B', textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>XX Poin</Text>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 7}}>Snack ABCD</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={{width: 16, height: 16, marginTop: 7}} source={require('./location.png')} />
                        <Text style={{ fontSize: 12, color: '#0B666A', textAlign: 'left', marginTop: 7, marginLeft: 5}}>Kantin GKU 2</Text>
                    </View>
                </View>                    
                <Image style={{width: 23, height: 23, marginLeft: 75}} source={require('./star.png')} />
            </View>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', width: 337, height: 92, backgroundColor: 'rgba(147, 147, 147, 0.3)', borderRadius: 20, padding: 10, marginBottom: 20}}>
                <Image style={{width: 102, height: 70, marginLeft: 2}} source={require('./bengbeng.png')} />
                <View style={{marginLeft: 15}}>
                    <Text style={{ fontSize: 16, color: '#FFA40B', textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>XX Poin</Text>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 7}}>Snack ABCD</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={{width: 16, height: 16, marginTop: 7}} source={require('./location.png')} />
                        <Text style={{ fontSize: 12, color: '#0B666A', textAlign: 'left', marginTop: 7, marginLeft: 5}}>Kantin GKU 2</Text>
                    </View>
                </View>                    
                <Image style={{width: 23, height: 23, marginLeft: 75}} source={require('./gstar.png')} />
            </View>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', width: 337, height: 92, backgroundColor: 'rgba(147, 147, 147, 0.3)', borderRadius: 20, padding: 10, marginBottom: 20}}>
                <Image style={{width: 102, height: 70, marginLeft: 2}} source={require('./bengbeng.png')} />
                <View style={{marginLeft: 15}}>
                    <Text style={{ fontSize: 16, color: '#FFA40B', textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>XX Poin</Text>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 7}}>Snack ABCD</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={{width: 16, height: 16, marginTop: 7}} source={require('./location.png')} />
                        <Text style={{ fontSize: 12, color: '#0B666A', textAlign: 'left', marginTop: 7, marginLeft: 5}}>Kantin GKU 2</Text>
                    </View>
                </View>                    
                <Image style={{width: 23, height: 23, marginLeft: 75}} source={require('./gstar.png')} />
            </View>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', width: 337, height: 92, backgroundColor: 'rgba(11, 102, 106, 0.1)', borderRadius: 20, padding: 10, marginBottom: 20}}>
                <Image style={{width: 102, height: 70, marginLeft: 2}} source={require('./bengbeng.png')} />
                <View style={{marginLeft: 15}}>
                    <Text style={{ fontSize: 16, color: '#FFA40B', textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>XX Poin</Text>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 7}}>Snack ABCD</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={{width: 16, height: 16, marginTop: 7}} source={require('./location.png')} />
                        <Text style={{ fontSize: 12, color: '#0B666A', textAlign: 'left', marginTop: 7, marginLeft: 5}}>Kantin GKU 2</Text>
                    </View>
                </View>                    
                <Image style={{width: 23, height: 23, marginLeft: 75}} source={require('./star.png')} />
            </View>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', width: 337, height: 92, backgroundColor: 'rgba(11, 102, 106, 0.1)', borderRadius: 20, padding: 10, marginBottom: 20}}>
                <Image style={{width: 102, height: 70, marginLeft: 2}} source={require('./bengbeng.png')} />
                <View style={{marginLeft: 15}}>
                    <Text style={{ fontSize: 16, color: '#FFA40B', textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>XX Poin</Text>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 7}}>Snack ABCD</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={{width: 16, height: 16, marginTop: 7}} source={require('./location.png')} />
                        <Text style={{ fontSize: 12, color: '#0B666A', textAlign: 'left', marginTop: 7, marginLeft: 5}}>Kantin GKU 2</Text>
                    </View>
                </View>                    
                <Image style={{width: 23, height: 23, marginLeft: 75}} source={require('./star.png')} />
            </View>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', width: 337, height: 92, backgroundColor: 'rgba(11, 102, 106, 0.1)', borderRadius: 20, padding: 10, marginBottom: 20}}>
                <Image style={{width: 102, height: 70, marginLeft: 2}} source={require('./bengbeng.png')} />
                <View style={{marginLeft: 15}}>
                    <Text style={{ fontSize: 16, color: '#FFA40B', textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>XX Poin</Text>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 7}}>Snack ABCD</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={{width: 16, height: 16, marginTop: 7}} source={require('./location.png')} />
                        <Text style={{ fontSize: 12, color: '#0B666A', textAlign: 'left', marginTop: 7, marginLeft: 5}}>Kantin GKU 2</Text>
                    </View>
                </View>                    
                <Image style={{width: 23, height: 23, marginLeft: 75}} source={require('./star.png')} />
            </View>
        </View>
        <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row', width: 337, height: 92, backgroundColor: 'rgba(11, 102, 106, 0.1)', borderRadius: 20, padding: 10, marginBottom: 20}}>
                <Image style={{width: 102, height: 70, marginLeft: 2}} source={require('./bengbeng.png')} />
                <View style={{marginLeft: 15}}>
                    <Text style={{ fontSize: 16, color: '#FFA40B', textAlign: 'left', fontWeight: 'bold', marginTop: 3}}>XX Poin</Text>
                    <Text style={{ fontSize: 14, textAlign: 'left', marginTop: 7}}>Snack ABCD</Text>
                    <View style={{ flexDirection: 'row'}}>
                        <Image style={{width: 16, height: 16, marginTop: 7}} source={require('./location.png')} />
                        <Text style={{ fontSize: 12, color: '#0B666A', textAlign: 'left', marginTop: 7, marginLeft: 5}}>Kantin GKU 2</Text>
                    </View>
                </View>                    
                <Image style={{width: 23, height: 23, marginLeft: 75}} source={require('./star.png')} />
            </View>
        </View>
    </ScrollView>
    <View style={{ position: 'absolute', left: 0, bottom: -30, shadowColor: "#000", shadowOffset: {width: 0, height: -2,}, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, right: 0, flexDirection: 'row', backgroundColor: '#FFFFFF', height: 90, width: '100%', alignItems: 'center', justifyContent: 'space-around', borderRadius: 20}}>
        <Link href="/">
            <Image source={require('./beranda.png')} />
        </Link>
        <Image source={require('./poinijo.png')} />
        <Link href="/profil">
            <Image source={require('./profil.png')} />
        </Link>        
    </View>
    </View>
  );
}
