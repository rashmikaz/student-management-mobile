import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

export default function Student() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [program, setProgram] = useState('');
    const [birthday, setBirthday] = useState('');


    const handleSubmit = () => {
        console.log({ firstName, lastName, email, phone, address, city, program, birthday });
    };

    const handleClose = () => {
        console.log("Form Closed");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Student Manage</Text>

            <View style={styles.nameContainer}>
                <TextInput
                    style={[styles.textFields, styles.nameField]}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <TextInput
                    style={[styles.textFields, styles.nameField]}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                />
            </View>

            <TextInput
                style={styles.textFields}
                placeholder="Street Address"
                value={address}
                onChangeText={setAddress}
            />
            <TextInput
                style={styles.textFields}
                placeholder="City"
                value={city}
                onChangeText={setCity}
            />
            <View style={styles.rowContainer}>
                <TextInput
                    style={[styles.textFields, styles.halfField]}
                    placeholder="Program"
                    value={program}
                    onChangeText={setProgram}
                />
                <TextInput
                    style={[styles.textFields, styles.halfField]}
                    placeholder="Birthday"
                    value={birthday}
                    onChangeText={setBirthday}
                />
            </View>

            <TextInput
                style={styles.textFields}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.textFields}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
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
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    rowContainer: {
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
    },
    nameField: {
        flex: 1,
        marginRight: 10,
    },
    halfField: {
        flex: 1,
        marginRight: 10,
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
