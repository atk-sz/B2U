import * as React from 'react';
import { Button, StyleSheet, ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import homeBannerimage from '../images/slide-1.jpg'
import { StackActions } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation()
    const goToLogin = () => {
        console.log('pressed')
        navigation.navigate('Login')
        // navigation.dispatch(StackActions.replace("Login"));
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={homeBannerimage} style={styles.homeBannerImage}>
                <View style={styles.titleContainer}><Text style={styles.homeBannerTitle}>CSKAA | VIDEOCONFERENCING</Text></View>
                <View style={styles.captionContainer}><Text style={styles.caption}>WE ARE ALMOST <Text style={styles.textYellowColor}> READY TO LAUNCH</Text> OUR <Text style={styles.textYellowColor}>NEW VIDEOCONFERENCING PLATFORM!</Text></Text></View>
                <View style={styles.btnsContainer}>
                    <TouchableOpacity style={styles.signUpBtn}>
                        <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.letsBeginBtn} onPress={goToLogin}>
                        <Text style={styles.letsBegin}>Let's begin</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    homeBannerImage: {
        flex: 1,
        display: 'flex',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeBannerTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    captionContainer: {
        paddingVertical: 10,
    },
    caption: {
        fontSize: 8,
        fontWeight: 'bold',
        color: 'white'
    },
    btnsContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    signUpBtn: {
        margin: 10,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: 'white'
    },
    signUp: {
        color: 'white',
        fontWeight: 'bold'
    },
    letsBeginBtn: {
        backgroundColor: 'white',
        margin: 10,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderColor: 'white'
    },
    letsBegin: {
        fontWeight: 'bold'
    },
    textYellowColor: {
        color: '#f1c11a'
    }
})