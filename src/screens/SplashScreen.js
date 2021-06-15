import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { StackActions } from "@react-navigation/native";

const SplashImg = require("../images/assets/splash.png");

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            // navigation.navigate('Home', { Title: 'Home' })
            navigation.dispatch(StackActions.replace("Home"));
        }, 2000);
    }, []);

    return (
        <View style={{ ...styles.container }}>
            <Image
                style={{
                    width,
                    height,
                }}
                source={SplashImg}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});