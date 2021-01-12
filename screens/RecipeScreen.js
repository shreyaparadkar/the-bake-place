import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';
import Titlebar from '../components/Titlebar';
import RecipeImgCard from '../components/RecipeImgCard';
import Theme from '../theme';
import RecipeCard from '../components/RecipeCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function RecipeScreen() {
    return (
        <View style={styles.outerContainer}>
            <Card style={styles.container}>
                <Card.Content>
                    <Titlebar />
                    <Title style={styles.title}>CHOCO-CHIP COOKIES</Title>

                    <RecipeImgCard />
                    <ScrollView style={styles.info}>
                        <RecipeCard id="INGREDIENTS" />
                        <RecipeCard id="STEPS" />
                    </ScrollView>
                </Card.Content>
            </Card>
        </View>
    )
};


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
        backgroundColor: Theme.colors.accent
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    info: {
        marginTop: 10,
        height: '55%',
    }
});