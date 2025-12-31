import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { saveRecord } from '../utils/storage';
import { formatSeconds } from '../utils/formatters';
import Header from '../components/RecordHeader';
import InfoSheet from '../components/InfoSheet';

const CounterScreen = ({ navigation }) => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const handleSave = async () => {
        setIsRunning(false);
        const formattedTime = formatSeconds(seconds);
        await saveRecord(formattedTime);
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" />

            <Header
                title="Record DFM"
                onBack={() => navigation.goBack()}
                onInfo={() => setModalVisible(true)}
            />

            <View style={styles.dashedContainer}>
                {Array.from({ length: 25 }).map((_, i) => (
                    <View key={i} style={styles.dash} />
                ))}
            </View>

            <LinearGradient
                colors={['#FFFFFF', '#FDF5F9', '#FADCEE']}
                style={styles.gradientContainer}
            >
                <View style={styles.content}>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>
                                Stop recording after{"\n"}10 kicks
                            </Text>
                        </View>
                        <View style={styles.triangle} />
                    </View>

                    <View style={styles.timerWrapper}>
                        <View style={styles.outerCircle}>
                            <View style={styles.middleCircle}>
                                <View style={styles.innerCircle}>
                                    {/* USE UTILITY HERE */}
                                    <Text style={styles.timer}>{formatSeconds(seconds)}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.controlsContainer}>
                        <TouchableOpacity
                            style={styles.playBtn}
                            onPress={() => setIsRunning(prev => !prev)}
                        >
                            {isRunning ? (
                                <View style={styles.stopIcon} />
                            ) : (
                                <Ionicons name="play" size={36} color="#333" style={{ marginLeft: 5 }} />
                            )}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={[styles.saveBtn, seconds === 0 && { opacity: 0.3 }]}
                            onPress={handleSave}
                            disabled={seconds === 0}
                        >
                            <Text style={styles.saveText}>Save</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.helpText}>
                                What if I am not getting enough kicks?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>

            <InfoSheet visible={modalVisible} onClose={() => setModalVisible(false)} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    dashedContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 14,
    },
    dash: {
        width: 6,
        height: 2,
        backgroundColor: '#898989',
        borderRadius: 1,
    },
    gradientContainer: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 30,
    },
    infoContainer: { alignItems: 'center' },
    infoBox: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 18,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 12,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#fff',
        marginTop: -1,
    },
    timerWrapper: {
        width: 280,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerCircle: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleCircle: {
        width: '85%',
        height: '85%',
        borderRadius: 85,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: '75%',
        height: '75%',
        borderRadius: 70,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timer: { fontSize: 56, color: '#EE6449', fontWeight: 'bold' },
    playBtn: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    stopIcon: { width: 24, height: 24, backgroundColor: '#333', borderRadius: 4 },
    footer: { width: '100%', alignItems: 'center', paddingHorizontal: 30 },
    saveBtn: {
        width: '100%',
        height: 60,
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    saveText: { fontSize: 18, fontWeight: '700' },
    helpText: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#000'
    },
});

export default CounterScreen;