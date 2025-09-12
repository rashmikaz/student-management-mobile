import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";


const timetable = [
    { time: "8:00 - 9:00", subject: "Math", teacher: "Mr. A", color: "#FFD700" },
    { time: "9:00 - 10:00", subject: "English", teacher: "Ms. B", color: "#87CEFA" },
    { time: "10:00 - 11:00", subject: "Physics", teacher: "Mr. C", color: "#90EE90" },
    { time: "11:00 - 12:00", subject: "History", teacher: "Ms. D", color: "#FFB6C1" },
];

const TimetableScreen = () => {
    const router = useRouter();

    const goBack = () => {
        router.replace("/dashboard"); // navigate back to dashboard
    };

    return (
        <ScrollView style={styles.container}>

            <TouchableOpacity style={styles.backButton} onPress={goBack}>
                <FontAwesome name="arrow-left" size={20} color="#fff" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>


            <Text style={styles.dayTitle}>Monday</Text>


            {timetable.map((entry, index) => (
                <View key={index} style={[styles.entryContainer, { backgroundColor: entry.color }]}>
                    <Text style={styles.time}>{entry.time}</Text>
                    <Text style={styles.subject}>{entry.subject}</Text>
                    <Text style={styles.teacher}>{entry.teacher}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default TimetableScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#f0f0f0" },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        backgroundColor: "#06B6D4",
        padding: 8,
        borderRadius: 8,
        width: 90,
        justifyContent: "center",
    },
    backText: {
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 5,
    },
    dayTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 12, textAlign: "center" },
    entryContainer: { padding: 12, borderRadius: 8, marginBottom: 8 },
    time: { fontWeight: "bold", color: "#333" },
    subject: { fontSize: 16, fontWeight: "600", color: "#fff" },
    teacher: { fontSize: 14, color: "#fff" },
});
