import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/Store";
import { getStudents, saveStudent, deletedStudent } from "../../reducers/studentReducer";
import  {StudentModel}  from "../../models/Student";

const StudentScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const students = useSelector((state: RootState) => state.students);

    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setNic] = useState("");
    const [address, setAddress] = useState("");
    const [program, setProgram] = useState("");

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);

    const handleAdd = () => {
        if (!firstName || !email || !nic || !address || !program) {
            Alert.alert("Validation", "All fields are required!");
            return;
        }

        const newStudent = new StudentModel(firstName, email, nic, address, program);
        dispatch(saveStudent(newStudent));
        resetForm();
    };

    const handleDelete = (id?: number) => {
        if (!id) return;
        dispatch(deletedStudent(id));
    };

    const resetForm = () => {
        setFirstName("");
        setEmail("");
        setNic("");
        setAddress("");
        setProgram("");
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
    cell: { textAlign: "center" },
    deleteButton: { backgroundColor: "red", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4 },
    deleteText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
});
