import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const DrawerContent = (props) => {
    const gotoHome = () => {
        props.navigation.navigate('Home')
    }
    return (
        <View style={styles.drawerContainer}>
            <TouchableOpacity style={styles.homeBtn} onPress={gotoHome}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}
export default DrawerContent;

const styles = StyleSheet.create({
    drawerContainer: {
        paddingVertical: 30,
    },
    homeBtn: {
        paddingHorizontal: 20
    },
})