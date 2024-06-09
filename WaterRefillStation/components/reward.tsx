import React from 'react';
import {Text, View, Image} from 'react-native';
import {TextStyles} from '../constants/Text';

export default function Reward() {
    return (
    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'rgba(11, 102, 106, 0.1)', borderRadius: 15, padding: 10, columnGap: 15, justifyContent: 'flex-start', marginTop: 15, marginHorizontal: 25}}>
        <Image style={{flex: 1, borderRadius: 7.5}} source={require('../assets/images/bengbeng.png')} />
        <View style={{flex: 2, justifyContent: 'space-around'}}>
            <Text style={[TextStyles.subtitle1, {color: '#FFA40B'}]}>XX Poin</Text>
            <Text style={[TextStyles.body2]}>Snack ABCD</Text>
            <View style={{ flexDirection: 'row', columnGap: 5}}>
                <Image style={{width: 16, height: 16}} source={require('../assets/images/location.png')} />
                <Text style={[TextStyles.caption, {color: '#0B666A'}]}>Kantin GKU 2</Text>
            </View>
        </View>                    
        <Image style={{width: 23, height: 23}} source={require('../assets/images/star.png')} />
    </View>
    );
}