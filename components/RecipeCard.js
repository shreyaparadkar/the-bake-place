import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { RECIPE } from '../data';
import Theme from '../theme';

const RecipeCard = ({ id }) => {
    const icon = id === 'STEPS' ? 'check-square-o' : 'circle';
    const size = id === 'STEPS' ? 12 : 10;

    const points = RECIPE[id].map((data) => {
        return (
            <Paragraph style={styles.para} key={RECIPE[id].indexOf(data)}>
                <FontAwesome name={icon} size={size} color={Theme.colors.primary} />
                {'  '}{data}
            </Paragraph>
        )
    })

    return (
        <View style={styles.container}>
            <Title style={styles.title}>{id}</Title>
            {points}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 8
    },
    title: {
        fontSize: 16,
    },
    para: {
        marginTop: 4
    }
})


export default RecipeCard;