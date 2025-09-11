import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from "react-native";
import axios from "axios";
import Student from "../../models/Student";

const StudentScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [address, setAddress] = useState("");
    const [program, setProgram] = useState("");

    const [students, setStudents] = useState<Student[]>([]);

    // Fetch all students
    const fetchStudents = async () => {
        try {
            const response = await axios.get<Student[]>("http://localhost:3000/student/all");
            setStudents(response.data);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to fetch students");
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    // Add student
    const handleAdd = async () => {
        if (!firstName || !email || !nic || !address || !program) {
            Alert.alert("Validation", "All fields are required!");
            return;
        }

        const studentData = new Student(firstName, email, nic, address, program);

        try {
            await axios.post("http://localhost:3000/student/add", studentData);
            Alert.alert("Success", "Student added successfully!");
            setFirstName("");
            setEmail("");
            setNic("");
            setAddress("");
            setProgram("");
            fetchStudents(); // Refresh list immediately
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to add student");
        }
    };

    // Delete student
    const handleDelete = async (id?: number) => {
        if (!id) return;
        try {
            await axios.delete(`http://localhost:3000/student/delete/${id}`);
            Alert.alert("Deleted", "Student removed successfully!");
            fetchStudents();
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to delete student");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Student</Text>
            <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="NIC" value={nic} onChangeText={setNic} />
            <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
            <TextInput style={styles.input} placeholder="Program" value={program} onChangeText={setProgram} />

            <Button title="Add Student" onPress={handleAdd} />

            <Text style={styles.heading}>Student List</Text>

            {/* Table Header */}
            <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.cell, { flex: 1 }]}>ID</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Name</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Email</Text>
                <Text style={[styles.cell, { flex: 2 }]}>NIC</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Address</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Program</Text>
                <Text style={[styles.cell, { flex: 1 }]}>Action</Text>
            </View>

            <FlatList
                data={students}
                keyExtractor={(item) => item.id?.toString() ?? Math.random().toString()}
                ListEmptyComponent={() => <Text style={{ textAlign: "center", marginTop: 10 }}>No students found</Text>}
                renderItem={({ item }) => (
                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, { flex: 1 }]}>{item.id ?? "-"}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.firstName}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.email}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.nic}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.address}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.program}</Text>
                        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default StudentScreen;

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
