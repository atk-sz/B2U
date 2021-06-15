import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    BackHandler,
    TextInput,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { StackActions } from "@react-navigation/native";
import { Button } from "react-native-paper";

const Face = require("../../images/assets/face.png");
const SignIn = require("../../images/assets/SignIn.png");
const Logo = require("../../images/assets/logo.png");

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#fff",
        flex: 1,
    },
    top: {
        height: height * 0.3,
        position: "relative",
        marginBottom: 20
    },
    bottom: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
});

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const gotoLogin = () => {
        navigation.navigate('Login')
    }

    const handleBackButtonClick = () => {
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener(
                "hardwareBackPress",
                handleBackButtonClick
            );
        };
    }, []);

    return (
        <View
            style={{
                ...styles.root,
                justifyContent: "flex-start",
                flexDirection: "column",
            }}
        >
            <ScrollView
                style={{
                    ...styles.root,
                }}
            >
                <View style={{ ...styles.top }}>
                    <Image source={Face} style={{ width, height: height * 0.29 }} />
                </View>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <View
                        style={{
                            width: width * 0.7,
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <TextInput
                            onChangeText={(name) => setName(name)}
                            defaultValue={name}
                            // keyboardType="text"
                            placeholder="Full Name"
                            style={{
                                marginBottom: 20,
                                borderColor: "#2D8CFF",
                                height: 40,
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 3,
                            }}
                        />
                        <TextInput
                            onChangeText={(uname) => setUsername(uname)}
                            defaultValue={username}
                            // keyboardType="email-address"
                            placeholder="Username"
                            style={{
                                marginBottom: 20,
                                borderColor: "#2D8CFF",
                                height: 40,
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 3,
                            }}
                        />
                        <TextInput
                            onChangeText={(email) => setEmail(email)}
                            defaultValue={email}
                            keyboardType="email-address"
                            placeholder="Email"
                            style={{
                                marginBottom: 20,
                                borderColor: "#2D8CFF",
                                height: 40,
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 3,
                            }}
                        />
                        <TextInput
                            keyboardType="visible-password"
                            placeholder="Password"
                            onChangeText={(password) => setPassword(password)}
                            defaultValue={password}
                            style={{
                                marginBottom: 20,
                                borderColor: "#2D8CFF",
                                height: 40,
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 3,
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button
                            style={{
                                backgroundColor: "#2D8CFF",
                                height: 30,
                                width: width * 0.7,
                                justifyContent: "center",
                                alignItems: "center",
                                margin: 10,
                            }}
                            mode="contained"
                            onPress={() => {
                                //   onLogin();
                                console.log('reg')
                            }}
                        >
                            Register
                        </Button>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text>or </Text>
                        <TouchableOpacity onPress={gotoLogin}><Text style={{ color: 'blue' }}>Login</Text></TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            source={Logo}
                            style={{ height: 100, width: 100 }}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default RegisterScreen;