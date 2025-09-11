import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from "react-native";
import axios from "axios";
import Program from "../../models/Program";

const ProgramScreen = () => {
    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");

    const [programs, setPrograms] = useState<Program[]>([]);

    // Fetch all programs
    const fetchPrograms = async () => {
        try {
            const response = await axios.get<Program[]>("http://localhost:3000/program/all");
            setPrograms(response.data);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to fetch programs");
        }
    };

    useEffect(() => {
        fetchPrograms();
    }, []);

    // Add program
    const handleAdd = async () => {
        if (!name || !duration) {
            Alert.alert("Validation", "All fields are required!");
            return;
        }

        const programData = new Program(name, parseInt(duration));

        try {
            await axios.post("http://localhost:3000/program/add", programData);
            Alert.alert("Success", "Program added successfully!");
            setName("");
            setDuration("");
            fetchPrograms(); // Refresh list immediately
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to add program");
        }
    };

    // Delete program
    const handleDelete = async (id?: number) => {
        if (!id) return;
        try {
            await axios.delete(`http://localhost:3000/program/delete/${id}`);
            Alert.alert("Deleted", "Program removed successfully!");
            fetchPrograms();
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Failed to delete program");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Program</Text>
            <TextInput style={styles.input} placeholder="Program Name" value={name} onChangeText={setName} />
            <TextInput
                style={styles.input}
                placeholder="Duration (in months)"
                value={duration}
                onChangeText={setDuration}
                keyboardType="numeric"
            />

            <Button title="Add Program" onPress={handleAdd} />

            <Text style={styles.heading}>Program List</Text>

            {/* Table Header */}
            <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.cell, { flex: 1 }]}>ID</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Name</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Duration</Text>
                <Text style={[styles.cell, { flex: 1 }]}>Action</Text>
            </View>

            <FlatList
                data={programs}
                keyExtractor={(item) => item.id?.toString() ?? Math.random().toString()}
                ListEmptyComponent={() => <Text style={{ textAlign: "center", marginTop: 10 }}>No programs found</Text>}
                renderItem={({ item }) => (
                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, { flex: 1 }]}>{item.id ?? "-"}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.duration} months</Text>
                        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default ProgramScreen;

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
