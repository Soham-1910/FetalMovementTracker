import { useState, useEffect } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRecords } from '../utils/storage';
import { useIsFocused } from '@react-navigation/native';
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import { useFonts } from 'expo-font';

const HomeScreen = ({ navigation }) => {
    const [records, setRecords] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) loadData();
    }, [isFocused]);

    const loadData = async () => {
        const data = await getRecords();
        setRecords(data);
    };

    const [fontsLoaded] = useFonts({
        BB: require('../../assets/fonts/BB.ttf'),
        SmallBunny: require('../../assets/fonts/SmallBunny.otf'),
    });

    if (!fontsLoaded) return null;

    return (
        <SafeAreaView style={styles.safe}>
            {/* HEADER */}
            <Header />

            {/* DASHED LINE */}
            <View style={styles.dashedContainer}>
                {Array.from({ length: 25 }).map((_, i) => (
                    <View key={i} style={styles.dash} />
                ))}
            </View>

            {/* ARTICLE */}
            <ArticleCard />

            {/* RECORD BUTTON */}
            <TouchableOpacity
                style={styles.recordBtn}
                onPress={() => navigation.navigate('Counter')}
            >
                <Text style={styles.btnText}>Record fetal movement</Text>
            </TouchableOpacity>

            {/* SUB HEADER */}
            <Text style={styles.subHeader}>Past records</Text>

            {/* RECORD LIST */}
            <FlatList
                data={records}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.recordRow}>
                        <Text style={styles.dateText}>
                            {item.date}
                        </Text>

                        <Text style={styles.durationText}>
                            {item.duration}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        paddingHorizontal: 20,
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

    recordBtn: {
        borderWidth: 1,
        borderColor: '#000',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 15,
    },

    btnText: {
        fontSize: 12,
        fontWeight: '600',
    },

    subHeader: {
        fontSize: 16,
        fontFamily: 'BB',
        marginBottom: 10,
    },

    listContent: {
        paddingBottom: 30,
    },

    recordRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        backgroundColor: '#FFF',
    },

    dateText: {
        fontSize: 12,
        color: '#555',
        flex: 1,
    },

    durationText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#000',
        marginLeft: 12,
        fontVariant: ['tabular-nums'], // ios
        fontFamily: 'monospace', //android
        marginRight:2,
    },
});

export default HomeScreen;
