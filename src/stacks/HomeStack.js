import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Header from '../components/navs/Header';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import CreateRoom from '../screens/room/CreateRoom';
import { useSelector } from 'react-redux';

const ScreenStack = createStackNavigator()

const HomeStack = () => {
    const { user } = useSelector((state) => ({ ...state }));

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
            {
                user && user.accessToken &&
                <>
                    <ScreenStack.Screen
                        options={{
                            title: "Createroom"
                        }}
                        name="Createroom" component={CreateRoom} />
                </>
            }
        </ScreenStack.Navigator>
    )
}

export default HomeStack;