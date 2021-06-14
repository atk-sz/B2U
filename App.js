import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import HomeStack from './src/stacks/HomeStack';

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Button onPress={() => navigation.openDrawer()} title="Open d" />
    </View>
  );
}
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Login" component={NotificationsScreen} />
          <Drawer.Screen name="SignUp" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      <FlashMessage style={{ marginTop: 25 }} position="top" />
    </View>
  );
}

export default App