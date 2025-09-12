import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from "react-native";
import axios from "axios";
import Teacher from "../../models/Teacher";

const TeacherScreen = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [address, setAddress] = useState("");
    const [subject, setSubject] = useState("");

    const [teachers, setTeachers] = useState<Teacher[]>([]);


    const fetchTeachers = async () => {
        try {
            const response = await axios.get<Teacher[]>("http://localhost:3000/teacher/all");
            setTeachers(response.data);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to fetch teachers");
        }
    };

    useEffect(() => {
        fetchTeachers();
    }, []);


    const handleAdd = async () => {
        if (!fullName || !email || !nic || !address || !subject) {
            Alert.alert("Validation", "All fields are required!");
            return;
        }

        const teacherData = new Teacher(fullName, email, nic, address, subject);

        try {
            await axios.post("http://localhost:3000/teacher/add", teacherData);
            Alert.alert("Success", "Teacher added successfully!");
            setFullName("");
            setEmail("");
            setNic("");
            setAddress("");
            setSubject("");
            fetchTeachers(); // Refresh list immediately
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to add teacher");
        }
    };


    const handleDelete = async (id?: number) => {
        if (!id) return;
        try {
            await axios.delete(`http://localhost:3000/teacher/delete/${id}`);
            Alert.alert("Deleted", "Teacher removed successfully!");
            fetchTeachers();
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to delete teacher");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Teacher</Text>
            <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="NIC" value={nic} onChangeText={setNic} />
            <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
            <TextInput style={styles.input} placeholder="Subject" value={subject} onChangeText={setSubject} />

            <Button title="Add Teacher" onPress={handleAdd} />

            <Text style={styles.heading}>Teacher List</Text>

            {/* Table Header */}
            <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.cell, { flex: 1 }]}>ID</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Name</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Email</Text>
                <Text style={[styles.cell, { flex: 2 }]}>NIC</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Address</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Subject</Text>
                <Text style={[styles.cell, { flex: 1 }]}>Action</Text>
            </View>

            <FlatList
                data={teachers}
                keyExtractor={(item) => item.id?.toString() ?? Math.random().toString()}
                ListEmptyComponent={() => <Text style={{ textAlign: "center", marginTop: 10 }}>No teachers found</Text>}
                renderItem={({ item }) => (
                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, { flex: 1 }]}>{item.id ?? "-"}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.fullName}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.email}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.nic}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.address}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.subject}</Text>
                        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default TeacherScreen;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    heading: { fontSize: 20, fontWeight: "bold", marginVertical: 10, textAlign: "center" },
    input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginVertical: 5, borderRadius: 5 },
    tableRow: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#ddd", paddingVertical: 6, alignItems: "center" },
    tableHeader: { backgroundColor: "#eee" },
    cell: { textAlign: "center" },
    deleteButton: { backgroundColor: "red", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4 },
    deleteText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
});
