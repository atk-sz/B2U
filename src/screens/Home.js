import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>CSKAA | VIDEOCONFERENCING</Text>
        <Button onPress={() => navigation.openDrawer()} title="Open Nav" />
    </View>)
};

export default Home;