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
                <Text style={[TextStyles.heading2, {color: '#0B666A'}]}>Daftar Poin</Text>
                <View style={[styles.container, styles.row, {alignSelf: 'flex-end', columnGap: 10, backgroundColor: '#0B666A', justifyContent: 'space-evenly'}]}>
                    <Image source={require('../assets/images/star.png')}></Image>
                    <Text style={[TextStyles.body1, {color: 'white'}]}>xxx points</Text>
                </View>
            </View>
            {/* list of rewards */}
            <Reward/>
            <Reward/>
            <Reward/>
            <Reward/>
            <Reward/>
            <Reward/>
            <Reward/>
            <Reward/>
            <Reward/>
            <Reward/>
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
