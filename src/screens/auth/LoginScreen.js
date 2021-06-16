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
} from "react-native";
import { Button } from "react-native-paper";
import { login } from "../../apis/auth";
import { showMessage, hideMessage } from "react-native-flash-message";

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
        marginBottom: height * .15,
    },
    bottom: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
});

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("a0sharma@gmail.com");
    const [password, setPassword] = useState("aman12");

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener(
                "hardwareBackPress",
                handleBackButtonClick
            );
        };
    }, []);

    const loginHandle = () => {
        if (email.trim() && password.trim()) {
            login(email, password)
                .then(res => {
                    navigation.navigate('Home')
                    showMessage({
                        message: "Logged in successfully",
                        type: "success",
                    });
                })
                .catch(err => {
                    console.log('err')
                    console.log(err)
                    showMessage({
                        message: "Invalid user or password",
                        type: "danger",
                    });
                })
        } else {
            showMessage({
                message: "Please enter the required fields",
                type: "danger",
            });
        }
    }

    const gotoRegister = () => {
        navigation.navigate('Register')
    }

    const handleBackButtonClick = () => {
        return true;
    };

    return (
        <View
            style={{
                ...styles.root,
                justifyContent: "flex-start",
                flexDirection: "column",
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
                    marginTop: height * .07
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
                        secureTextEntry={true}
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
                        onPress={loginHandle}
                    >
                        Login
                    </Button>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text>or </Text>
                    <TouchableOpacity onPress={gotoRegister}><Text style={{ color: 'blue' }}>Register</Text></TouchableOpacity>
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
        </View>
    );
};

export default LoginScreen;