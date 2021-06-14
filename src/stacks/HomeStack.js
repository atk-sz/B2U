import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Header from '../components/navs/Header';

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
                title:"Home"
            }}
            name="Home" component={Home} />
        </ScreenStack.Navigator>
    )
}

export default HomeStack;