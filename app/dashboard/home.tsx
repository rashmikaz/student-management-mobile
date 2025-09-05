import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Home() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
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
                    <Text style={styles.cardCount}>122</Text>
                    <Text style={styles.cardDescription}>All registered teachers</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Staff</Text>
                    <Text style={styles.cardCount}>158</Text>
                    <Text style={styles.cardDescription}>All registered staff</Text>
                </View>
            </View>

            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconWrapper}>
                    <View style={[styles.iconCircle, { backgroundColor: '#407BFF' }]}>
                        <FontAwesome name="envelope" size={24} color="white" />
                    </View>
                    <Text style={styles.iconLabel}>Email</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconWrapper}>
                    <View style={[styles.iconCircle, { backgroundColor: '#2DBF64' }]}>
                        <FontAwesome name="calendar-check-o" size={24} color="white" />
                    </View>
                    <Text style={styles.iconLabel}>Attendance</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconWrapper}>
                    <View style={[styles.iconCircle, { backgroundColor: '#F4B400' }]}>
                        <FontAwesome name="table" size={24} color="white" />
                    </View>
                    <Text style={styles.iconLabel}>Time Table</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconWrapper}>
                    <View style={[styles.iconCircle, { backgroundColor: '#34C4A0' }]}>
                        <FontAwesome name="cogs" size={24} color="white" />
                    </View>
                    <Text style={styles.iconLabel}>Settings</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
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

    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        width: '100%',
    },
    iconWrapper: {
        alignItems: 'center',
    },
    iconCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
    },
    iconLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});