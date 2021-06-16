import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useDispatch, useSelector } from 'react-redux';

const DrawerContent = (props) => {
    const { user } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();

    const gotoHome = () => {
        props.navigation.navigate('Home')
    }

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT",
            payload: null,
        });
        showMessage({
            message: "Logged out successfully",
            type: "success",
        });
        props.navigation.navigate('Home')
    }

    return (
        <View style={styles.drawerContainer}>
            <TouchableOpacity style={styles.homeBtn} onPress={gotoHome}>
                <Text>Home</Text>
            </TouchableOpacity>
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {user && user.accessToken && <Text style={{ fontWeight: 'bold' }}>{user.email}</Text>}
            </View>
            <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
                {user && user.accessToken && <Text style={{ fontWeight: 'bold' }}>Logout</Text>}
            </TouchableOpacity>
        </View>
    )
}
export default DrawerContent;

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        paddingVertical: 30,
        position: 'relative',
    },
    homeBtn: {
        paddingHorizontal: 20
    },
    logoutBtn: {
        position: 'absolute',
        bottom: 50,
        left: 30,
    }
})