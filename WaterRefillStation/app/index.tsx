import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';

export default function HomePage() {
    const [fontsLoaded] = useFonts({
        'Poppins': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <View><Text>Loading...</Text></View>;
    }
    
    return (
        <View style={styles.container} >
            <Text style={styles.heading1} >HomePage</Text>
            <Link href={'./login'}>
                <Text style={styles.heading2} >Login</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        direction: 'ltr',
        justifyContent: 'center',
        alignItems: 'center',
    },

    heading1: {
        fontSize: 28,
        fontFamily: 'Poppins',
    },
    heading2: {
        fontSize: 21,
        fontFamily: 'Poppins',
    }
});