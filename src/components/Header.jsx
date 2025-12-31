import { View, Text, StyleSheet } from 'react-native';
import ProfileBadge from './Profile';

const Header = () => {
    return (
        <View style={styles.headerContainer}>

            {/* left */}
            <View style={styles.side} />

            {/* center */}
            <Text style={styles.headerTitle}>
                DFM (Kick counter)
            </Text>

            {/* right */}
            <View style={styles.side}>
                <ProfileBadge count={0} />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F9F9F9',
    },

    side: {
        width: 70,         
        alignItems: 'flex-end',
    },

    headerTitle: {
        fontSize: 12,
        fontWeight: '700',
        color: '#000',
        textAlign: 'center',
    },
});

export default Header;
