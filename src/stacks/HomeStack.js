import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/navs/Header';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import CreateRoom from '../screens/room/CreateRoom';

const ScreenStack = createStackNavigator()

const HomeStack = () => {
    return (
        <ScreenStack.Navigator initialRouteName="Home"
            screenOptions={{
                header: (Props) => <Header {...Props} />
            }
            }
        >
            <ScreenStack.Screen
                options={{
                    title: "Home"
                }}
                name="Home" component={HomeScreen} />
            <ScreenStack.Screen
                options={{
                    title: "Login"
                }}
                name="Login" component={LoginScreen} />
            <ScreenStack.Screen
                options={{
                    title: "Register"
                }}
                name="Register" component={RegisterScreen} />
            <ScreenStack.Screen
                options={{
                    title: "Createroom"
                }}
                name="Createroom" component={CreateRoom} />
        </ScreenStack.Navigator>
    )
}

export default HomeStack;