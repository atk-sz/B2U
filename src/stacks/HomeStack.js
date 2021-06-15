import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/navs/Header';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';

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
        </ScreenStack.Navigator>
    )
}

export default HomeStack;