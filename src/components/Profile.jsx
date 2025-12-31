import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileBadge = ({ count = 0 }) => {
    return (
        <View style={styles.badgeContainer}>
            <View style={styles.avatarWrapper}>
                <Image
                    source={{
                        uri: 'https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/128/Baby-3d-Light-icon.png',
                    }}
                    style={styles.avatar}
                />
                <View style={styles.timerIconOverlay}>
                    <Text style={styles.clockIcon}>🕒</Text>
                </View>
            </View>

            <Text style={styles.counterText}>{count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    badgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 10,
        minWidth: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },

    avatarWrapper: {
        position: 'relative',
        marginRight: 6,
    },

    avatar: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },

    timerIconOverlay: {
        position: 'absolute',
        top: -3,
        right: -3,
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        width: 14,
        height: 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFF',
    },

    clockIcon: {
        fontSize: 8,
        lineHeight: 10,
    },

    counterText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#333',
    },
});

export default ProfileBadge;
