import * as React from 'react';
import { Text, View, TextInput, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");

const LoginScreen = () => {
    const navigation = useNavigation()
    const [value, onChangeText] = React.useState('');
    const [password, onChangePass] = React.useState('');

    const gotoRegister = () => {
        navigation.navigate('Register')
    }

    return (<View style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.loginBox}>
            <View>
                <Text>LOGIN</Text>
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
                <TouchableOpacity onPress={gotoRegister}><Text style={{ color: 'blue' }}>Register</Text></TouchableOpacity>
            </View>
            <View>

            </View>
        </View>
    </View>);
};

export default LoginScreen;

const styles = StyleSheet.create({
    loginBox: {
        width: width * .5,
        height: height * .5,
    }
})