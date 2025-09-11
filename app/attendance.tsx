import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

interface Student {
    id: string;
    name: string;
    roll: string;
    present: boolean;
}

export default function AttendanceScreen() {
    const router = useRouter();

    const [students, setStudents] = useState<Student[]>([
        { id: "1", name: "John Doe", roll: "S001", present: false },
        { id: "2", name: "Jane Smith", roll: "S002", present: false },
        { id: "3", name: "Michael Johnson", roll: "S003", present: false },
        { id: "4", name: "Emily Brown", roll: "S004", present: false },
    ]);

    const toggleAttendance = (id: string) => {
        setStudents((prev) =>
            prev.map((student) =>
                student.id === id ? { ...student, present: !student.present } : student
            )
        );
    };

    const submitAttendance = () => {
        const presentCount = students.filter((s) => s.present).length;
        const absentCount = students.length - presentCount;

        Alert.alert(
            "Attendance Submitted",
            `Present: ${presentCount}, Absent: ${absentCount}`
        );
    };

    function back(){
        router.replace('/dashboard');
    }


    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.backButton} onPress={back}>
                <FontAwesome name="arrow-left" size={20} color="#fff" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Student Attendance</Text>


            <FlatList
                data={students}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.studentCard}>
                        <View>
                            <Text style={styles.studentName}>{item.name}</Text>
                            <Text style={styles.studentRoll}>Roll: {item.roll}</Text>
                        </View>

                        <TouchableOpacity
                            style={[
                                styles.attendanceButton,
                                { backgroundColor: item.present ? "#2DBF64" : "#EF4444" },
                            ]}
                            onPress={() => toggleAttendance(item.id)}
                        >
                            <Text style={styles.attendanceText}>
                                {item.present ? "Present" : "Absent"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />


            <TouchableOpacity style={styles.submitButton} onPress={submitAttendance}>
                <Text style={styles.submitText}>Submit Attendance</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F9FAFB",
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
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
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "#111827",
    },
    studentCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
    },
    studentName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#111827",
    },
    studentRoll: {
        fontSize: 14,
        color: "#6B7280",
    },
    attendanceButton: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    attendanceText: {
        color: "#fff",
        fontWeight: "bold",
    },
    submitButton: {
        backgroundColor: "#06B6D4",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 15,
    },
    submitText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
