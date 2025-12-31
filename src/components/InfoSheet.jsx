import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const InfoSheet = ({ visible, onClose }) => {
    const steps = [
        { id: 1, text: "Choose a **time** when you are **least distracted** or when you typically **feel the fetus move**." },
        { id: 2, text: "Get **comfortable**. **Lie** on your **left side** or sit with your feet propped up." },
        { id: 3, text: "Place your **hands on your belly**." },
        { id: 4, text: "**Start a timer** or watch the clock." },
        { id: 5, text: "**Count** each kick. Keep counting until you get to **10 kicks / flutters / swishes / rolls**." },
        { id: 6, text: "Once you reach **10 kicks, jot down** how many **minutes** it took." },
    ];


    const renderStyledText = (text) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <Text key={index} style={styles.boldText}>{part.replace(/\*\*/g, '')}</Text>;
            }
            return part;
        });
    };

    return (
        <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.container}>

                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeIcon}>✕</Text>
                    </TouchableOpacity>

                    <View style={styles.card}>
                        <View style={styles.header}>
                            <Text style={styles.headerIcon}>👣</Text>
                            <Text style={styles.title}>Steps to count fetal kicks</Text>
                        </View>

                        <ScrollView showsVerticalScrollIndicator={false} style={styles.list}>
                            {steps.map((step, index) => (
                                <View
                                    key={step.id}
                                    style={[
                                        styles.itemRow,
                                        index % 2 === 1 ? styles.altBackground : null,
                                        index === steps.length - 1 ? styles.lastItem : null
                                    ]}
                                >
                                    <Text style={styles.itemText}>
                                        <Text style={styles.boldText}>{step.id}. </Text>
                                        {renderStyledText(step.text)}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    container: {
        width: '100%',
        alignItems: 'flex-end',
    },
    closeButton: {
        backgroundColor: '#E0E0E0',
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: -10,
        zIndex: 1,
    },
    closeIcon: {
        fontSize: 18,
        color: '#000',
        fontWeight: '300',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 24,
        width: '100%',
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    headerIcon: {
        fontSize: 20,
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: '#000',
    },
    list: {
        maxHeight: 500,
    },
    itemRow: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    altBackground: {
        backgroundColor: '#F2F2F2',
    },
    itemText: {
        fontSize: 15,
        lineHeight: 22,
        color: '#333',
    },
    boldText: {
        fontWeight: 'bold',
        color: '#000',
    },
    lastItem: {
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    }
});

export default InfoSheet;