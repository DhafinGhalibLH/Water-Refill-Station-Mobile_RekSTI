import React from 'react';
import {Text, View, Image} from 'react-native';
import {TextStyles} from '../constants/Text';

type RewardProps = {
    place: string;
    name: string;
    nim: string;
    color: string;
    boxColor: string;
};

const Reward: React.FC<RewardProps> = ({ place, name, nim, color, boxColor }) => (
    <View style={{ flex: 1, flexDirection: 'row', backgroundColor: boxColor, borderRadius: 15, padding: 10, columnGap: 15, justifyContent: 'flex-start', marginTop: 15, marginHorizontal: 25}}>
        <Image style={{flex: 1, borderRadius: 7.5}} source={require('../assets/images/cewek.png')} />
        <View style={{flex: 2, justifyContent: 'space-around'}}>
            <Text style={[TextStyles.subtitle1, {color: color}]}>{place}</Text>
            <Text style={[TextStyles.body2]}>{name}</Text>
            <View style={{ flexDirection: 'row', columnGap: 5}}>
                <Text style={[TextStyles.caption, {color: '#0B666A'}]}>{nim}</Text>
            </View>
        </View>                    
        <Image style={{width: 23, height: 23}} source={require('../assets/images/star.png')} />
    </View>
);

export default Reward;