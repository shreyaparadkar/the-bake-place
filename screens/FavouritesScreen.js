import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Title } from 'react-native-paper';
import Navbar from '../components/Navbar';
import Theme from '../theme';
import FavsCardList from '../components/FavsCardList';


export default function RecipeScreen() {
    return (
        <View style={styles.outerContainer}>
            <Card style={styles.container}>
                <Card.Content>
                    <Navbar />
                    <Title style={styles.title}>FAVOURITES</Title>
                    <View style={styles.list}>
                        <FavsCardList />
                    </View>

                </Card.Content>
            </Card>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: '97.5%',
        backgroundColor: Theme.colors.background,
        borderRadius: 40,
        marginTop: 8
    },
    outerContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 0,
    },
    list: {
        height: '84%'
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        color: Theme.colors.primary,
        fontWeight: 'bold'
    },
});