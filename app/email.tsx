import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

interface StudentEmail {
    id: string;
    name: string;
    email: string;
}

export default function Email() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emails, setEmails] = useState<StudentEmail[]>([]);

    function back(){
        router.replace('/dashboard');
    }

    const addEmail = () => {
        if (name.trim() === "" || email.trim() === "") {
            Alert.alert("Error", "Please enter both name and email");
            return;
        }

        setEmails([
            ...emails,
            { id: Math.random().toString(), name: name.trim(), email: email.trim() },
        ]);
        setName("");
        setEmail("");
    };

    const deleteEmail = (id: string) => {
        setEmails(emails.filter(item => item.id !== id));
    };

    return (
        <View style={styles.container}>


            <TouchableOpacity style={styles.backButton} onPress={back}>
                <FontAwesome name="arrow-left" size={20} color="#fff" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Student Emails</Text>


            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Student Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Student Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TouchableOpacity style={styles.button} onPress={addEmail}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>

            {/* Emails List */}
            <FlatList
                data={emails}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.emailItem}>
                        <View>
                            <Text style={styles.emailName}>{item.name}</Text>
                            <Text style={styles.emailText}>{item.email}</Text>
                        </View>
                        <TouchableOpacity onPress={() => deleteEmail(item.id)}>
                            <FontAwesome name="trash" size={20} color="#EF4444" />
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>No emails added yet</Text>}
            />
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
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#111827",
        textAlign: "center",
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#CBD5E1",
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    button: {
        backgroundColor: "#06B6D4",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    emailItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#E0F2FE",
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    emailName: {
        fontWeight: "bold",
        color: "#0C4A6E",
    },
    emailText: {
        color: "#0C4A6E",
    },
    emptyText: {
        textAlign: "center",
        marginTop: 20,
        color: "#6B7280",
    },
});
