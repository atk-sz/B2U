import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import HomeStack from './src/stacks/HomeStack';
import DrawerContent from './src/components/drawer/DrawerContent';
import SplashScreen from './src/screens/SplashScreen';

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
        <Drawer.Navigator initialRouteName="Splash" drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen options={{
            headerShown: false,
          }}
            name="Splash"
            component={SplashScreen} />
          <Drawer.Screen name="HomeStack" component={HomeStack} />
          <Drawer.Screen name="Login" component={NotificationsScreen} />
          <Drawer.Screen name="SignUp" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
      <FlashMessage style={{ marginTop: 25 }} position="top" />
    </View>
  );
}

export default App