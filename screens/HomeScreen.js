import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'
import FiltersBar from '../components/FiltersBar';
import ImgCardList from '../components/ImgCardList';
import List from '../components/List';
import Navbar from '../components/Navbar';
import Theme from '../theme';


export default function HomeScreen() {
    return (
        <View style={styles.outerContainer}>
            <Card style={styles.container}>
                <Card.Content>
                    <Navbar />
                    <ImgCardList />
                    <View style={styles.filter}>
                        <FiltersBar />
                    </View>
                    <View style={styles.list}>
                        <List />
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
    filter: {
        marginLeft: -16.5,
        width: '96%'
    },
    list: {
        marginTop: 10,
        height: '49%'
    }
});