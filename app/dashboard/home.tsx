import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

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
                    <Text style={styles.cardCount}>1328</Text>
                    <Text style={styles.cardDescription}>All registered teachers</Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Staff</Text>
                    <Text style={styles.cardCount}>1328</Text>
                    <Text style={styles.cardDescription}>All registered staff</Text>
                </View>
            </View>

            <Image
                source={{ uri: 'https://img.freepik.com/free-vector/presentation-concept-illustration_114360-2682.jpg?t=st=1740728652~exp=1740732252~hmac=8df921d4fbe251e962afa4143f94867417b4a5b55552908a4221321d0686e717&w=1480' }} // Use a URL or require for local images
                style={styles.image}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        flexGrow: 1, // This makes sure the content takes the full height when scrolling
        alignItems: 'center',
        justifyContent: 'flex-start', // Start the content from top
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
    image: {
        width: 300,  // Adjust the size as needed
        height: 200, // Adjust the size as needed
        marginTop: 20,
        borderRadius: 10, // Optional: rounded corners for the image
    },
});
