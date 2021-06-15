import React, { useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, Image, Dimensions } from "react-native";
// import Constants from 'expo-constants';

const { width, height } = Dimensions.get("window");

const SplashImg = require("../images/assets/splash.png");

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeStack')
        }, 2000);
    }, []);

    return (
        <SafeAreaView style={{ ...styles.container }}>
            <Image
                style={{
                    width,
                    height,
                }}
                source={SplashImg}
                resizeMode="cover"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // marginTop: Constants.statusBarHeight,
    },
});