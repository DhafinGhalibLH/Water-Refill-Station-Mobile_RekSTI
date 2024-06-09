import React from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';
import {NavbarPoin} from '@/components/navbar';
import Reward from '@/components/reward';
import { TextStyles } from '../constants/Text';
export default function Poin() {
    return (
    <View style = {styles.backdrop}>
        <ScrollView>
            {/* Title + Jumlah Poin */}
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 25, marginHorizontal: 25}}>
                <Text style={[TextStyles.heading2, {color: '#0B666A'}]}>Leaderboard</Text>
                <View style={[styles.container, styles.row, {alignSelf: 'flex-end', columnGap: 10, backgroundColor: '#0B666A', justifyContent: 'space-evenly'}]}>
                    <Image source={require('../assets/images/star.png')}></Image>
                    <Text style={[TextStyles.body1, {color: 'white'}]}>100 points</Text>
                </View>
            </View>
            {/* list of rewards */}
            <Reward place="1st Place" name="Siti Umaira" nim="18221500" color='FFA40B' boxColor='rgba(255, 223, 0, 1)' />
            <Reward place="2nd Place" name="Ahmad Maulana" nim="13222800" color='FFA40B' boxColor='rgba(192, 192, 192, 1)' />
            <Reward place="3rd Place" name="Bunga Citra" nim="13523523" color='FFA40B' boxColor='rgba(205, 127, 50, 1)'/>
            <Reward place="4th Place" name="Samuel Jackson" nim="16523443" color='FFA40B' boxColor='rgba(11, 102, 106, 0.1)'/>
            <Reward place="5th Place" name="Alamsyah Nur" nim="19621490" color='FFA40B' boxColor='rgba(11, 102, 106, 0.1)'/>
            <Reward place="6th Place" name="Bambang Susetyo" nim="16423557" color='FFA40B' boxColor='rgba(11, 102, 106, 0.1)'/>
            <Reward place="7th Place" name="Wan Aufa Azis" nim="16452337" color='FFA40B' boxColor='rgba(11, 102, 106, 0.1)'/>
            <Reward place="8th Place" name="Ahmad Rivai Yahya" nim="18221000" color='FFA40B' boxColor='rgba(11, 102, 106, 0.1)'/>
            <View style={{height: 100}}></View>
        </ScrollView>
        {/* navbar */}
        <NavbarPoin/>
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
        padding : 10,
        borderRadius: 7.5,
    },
    row: {
        flexDirection: 'row'
    }
});
