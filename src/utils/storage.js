import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@fetal_movement_records';

export const saveRecord = async (duration) => {
    try {
        const existing = await getRecords();
        const newRecord = {
            id: Date.now().toString(),
            date: new Date().toLocaleDateString('en-GB', {
                weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'
            }),
            duration: duration, // e.g., "10:32"
            timestamp: Date.now(),
        };
        // Save with newest first
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([newRecord, ...existing]));
    } catch (e) {
        console.error("Failed to save record", e);
    }
};

export const getRecords = async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};