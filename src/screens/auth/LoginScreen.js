import * as React from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window");

const LoginScreen = () => {
    const [value, onChangeText] = React.useState('');
    const [password, onChangePass] = React.useState('');

    return (<View>
        <View>
            <View>
                <Text>LOGIN</Text>
            </View>
            <View>
                <AntDesign name="user" size={24} color="black" />
                <TextInput
                    placeholder='email or username'
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
            </View>
            <View>
                <AntDesign name="lock" size={24} color="black" />
                <TextInput
                    secureTextEntry={true}
                    placeholder='password'
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => onChangePass(text)}
                    value={password}
                />
            </View>
            <View>

            </View>
            <View>

            </View>
        </View>
    </View>);
};

export default LoginScreen;