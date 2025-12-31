import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ title, onBack, onInfo }) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBack} style={styles.iconBtn}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>

        <TouchableOpacity onPress={onInfo} style={styles.iconBtn}>
            <Ionicons name="information-circle-outline" size={26} color="black" />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
    },
    iconBtn: {
        padding: 5,
    },
});

export default Header;