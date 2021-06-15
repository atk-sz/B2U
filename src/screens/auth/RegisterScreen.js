import React from 'react';
import { Text, View, TextInput, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");

const RegisterScreen = () => {
    const navigation = useNavigation()
    const [value, onChangeText] = React.useState('');
    const [password, onChangePass] = React.useState('');

    const gotoLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.registerBox}>
                <View>
                    <Text>REGISTER</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <AntDesign name="user" size={24} color="black" />
                    <TextInput
                        placeholder='email or username'
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <AntDesign name="lock" size={24} color="black" />
                    <TextInput
                        secureTextEntry={true}
                        placeholder='password'
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => onChangePass(text)}
                        value={password}
                    />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Text>or </Text>
                    <TouchableOpacity onPress={gotoLogin}><Text style={{ color: 'blue' }}>Login</Text></TouchableOpacity>
                </View>
                <View>

                </View>
            </View>
        </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    registerBox: {
        width: width * .5,
        height: height * .5,
    }
})