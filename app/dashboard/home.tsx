import React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Student Management System</Text>

            {/* Student Count Card */}
            <View style={styles.card}>
                <Text style={styles.cardIcon}>👨‍🎓</Text>
                <Text style={styles.cardTitle}>Students</Text>
                <Text style={styles.cardCount}>100</Text>
            </View>

            {/* Teachers Count Card */}
            <View style={styles.card}>
                <Text style={styles.cardIcon}>👩‍🏫</Text>
                <Text style={styles.cardTitle}>Teachers</Text>
                <Text style={styles.cardCount}>20</Text>
            </View>

            {/* Program Count Card */}
            <View style={styles.card}>
                <Text style={styles.cardIcon}>📚</Text>
                <Text style={styles.cardTitle}>Programs</Text>
                <Text style={styles.cardCount}>5</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5e7eb', // Light background
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#0ea5e9', // Blue header
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    card: {
        width: '90%',
        padding: 25,
        marginBottom: 20,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: '#06B6D4',
        elevation: 8, // Android Shadow
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        transform: [{ scale: 1 }],
    },
    cardIcon: {
        fontSize: 40,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
        textTransform: 'uppercase',
    },
    cardCount: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    },
});
