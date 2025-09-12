import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { ProgramModel } from "../../models/Program";
import { getPrograms, saveProgram, deleteProgram } from "../../reducers/programReducer";

const ProgramScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const programs = useSelector((state: RootState) => state.programs);

    const [name, setName] = useState("");
    const [duration, setDuration] = useState("");

    useEffect(() => {
        dispatch(getPrograms());
    }, [dispatch]);

    const handleAdd = () => {
        if (!name || !duration) {
            Alert.alert("Validation", "All fields are required!");
            return;
        }

        const newProgram = new ProgramModel(name, parseInt(duration));
        dispatch(saveProgram(newProgram));
        resetForm();
    };

    const handleDelete = (id?: number) => {
        if (!id) return;
        dispatch(deleteProgram(id));
    };

    const resetForm = () => {
        setName("");
        setDuration("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Program</Text>
            <TextInput
                style={styles.input}
                placeholder="Program Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Duration (in months)"
                value={duration}
                onChangeText={setDuration}
                keyboardType="numeric"
            />

            <Button title="Add Program" onPress={handleAdd} />

            <Text style={styles.heading}>Program List</Text>

            <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.cell, { flex: 1 }]}>ID</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Name</Text>
                <Text style={[styles.cell, { flex: 2 }]}>Duration</Text>
                <Text style={[styles.cell, { flex: 1 }]}>Action</Text>
            </View>

            <FlatList
                data={programs}
                keyExtractor={(item) => item.id?.toString() ?? Math.random().toString()}
                ListEmptyComponent={() => (
                    <Text style={{ textAlign: "center", marginTop: 10 }}>No programs found</Text>
                )}
                renderItem={({ item }) => (
                    <View style={styles.tableRow}>
                        <Text style={[styles.cell, { flex: 1 }]}>{item.id ?? "-"}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.name}</Text>
                        <Text style={[styles.cell, { flex: 2 }]}>{item.duration} months</Text>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => handleDelete(item.id)}
                        >
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
