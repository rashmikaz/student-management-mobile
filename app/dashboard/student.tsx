import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

export default function Student() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [nic, setNic] = useState('');
    const [address, setAddress] = useState('');
    const [program, setProgram] = useState('');

    const handleSubmit = () => {
        console.log({ firstName, email, nic, address, program });
    };

    const handleClose = () => {

        console.log("Form Closed");
    };

    return (
        <View style={styles.container}>

            <Text style={styles.heading}>Student Manage</Text>


            <TextInput
                style={styles.textFields}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />


            <View style={styles.emailNicContainer}>
                <TextInput
                    style={[styles.textFields, styles.email]}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={[styles.textFields, styles.nic]}
                    placeholder="NIC"
                    value={nic}
                    onChangeText={setNic}
                />
            </View>


            <TextInput
                style={[styles.textFields, styles.reducedHeight]}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
            />
            <TextInput
                style={[styles.textFields, styles.reducedHeight]}
                placeholder="Program"
                value={program}
                onChangeText={setProgram}
            />


            <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
                <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f7f7f7",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
        color: "#333",
    },
    emailNicContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    textFields: {
        borderWidth: 2,
        borderColor: '#6c757d',
        padding: 12,
        marginBottom: 15,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#ffffff',
        color: '#333',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        height: 50,
        paddingLeft: 15,
        flex: 1,
    },
    email: {
        marginRight: 10,
    },
    nic: {
        marginLeft: 10,
    },
    reducedHeight: {
        height: 40,
    },
    addButton: {
        backgroundColor: '#06B6D4',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        backgroundColor: '#f44336',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
