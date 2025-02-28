import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Student Management System</Text>

            <Text style={styles.welcome}>Welcome back</Text>
            <Text style={styles.description}>
                "Effortless student management with real-time insights, attendance tracking, and performance analytics—all in one powerful dashboard!"
            </Text>

            <View style={styles.cardContainer}>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Program</Text>
                    <Text style={styles.cardCount}>1328</Text>
                    <Text style={styles.cardDescription}>All registered students</Text>
                </View>


                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Teacher</Text>
                    <Text style={styles.cardCount}>1328</Text>
                    <Text style={styles.cardDescription}>All registered teachers</Text>
                </View>


                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Staff</Text>
                    <Text style={styles.cardCount}>1328</Text>
                    <Text style={styles.cardDescription}>All registered staff</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    welcome: {
        fontSize: 32,
        fontWeight: '600',
        fontFamily: 'monospace',
        marginBottom: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
        marginBottom: 30,
        width: '80%',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    cardContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        width: '90%',
        alignItems: 'center',
        textAlign: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardCount: {
        fontSize: 24,
        color: '#555',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
    },
});
