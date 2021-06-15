import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Header = ({ navigation, scene }) => {
    const { title } = scene.__memo[2].options
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={openMenu} style={styles.menuBar}>
                <Entypo name="menu" size={24} color="black" />
            </TouchableOpacity>
            <View>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        backgroundColor: '#036ffc',
        height: 70,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    headerTitle:{
        fontSize:24,
    },
    menuBar: {
        position: 'absolute',
        left: 20,
        top: 30
    },
    menuBarIcon: {
        fontWeight: 'bold'
    }
});
