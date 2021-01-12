import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Title, Paragraph, } from 'react-native-paper'
import Animated from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Theme from '../theme';

const RecipeImgCard = () => {

    return (
        <Animated.View style={styles.Container}>
            <View style={styles.imgContainer}>
                <View style={styles.stars}>
                    <MaterialCommunityIcons name="star" size={20} color={Theme.colors.primary} />
                    <MaterialCommunityIcons name="star" size={20} color={Theme.colors.primary} />
                    <MaterialCommunityIcons name="star" size={20} color={Theme.colors.primary} />
                    <MaterialCommunityIcons name="star" size={20} color={Theme.colors.primary} />
                    <MaterialCommunityIcons name="star-half" size={20} color={Theme.colors.primary} />
                </View>
                <Image style={styles.img}
                    source={require('../assets/images/cookies.jpg')}
                />
            </View>
            <View style={styles.textContainer}>
                <View style={styles.content}>
                    <Title style={styles.infoTitle}>Prep Time</Title>
                    <Paragraph style={styles.info}>30 mins</Paragraph>
                </View>
                <View style={styles.content}>
                    <Title style={styles.infoTitle}>Cook Time</Title>
                    <Paragraph style={styles.info}>1 hour</Paragraph>
                </View>
                <View style={styles.content}>
                    <Title style={styles.infoTitle}>Servings</Title>
                    <Paragraph style={styles.info}>3 portions</Paragraph>
                </View>
                <View style={styles.content}>
                    <Title style={styles.infoTitle}>Nutrition</Title>
                    <Paragraph style={styles.info}>80 calories</Paragraph>
                    <Paragraph style={styles.info}>Vegetarian</Paragraph>

                </View>
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    imgContainer: {
        alignItems: 'center'
    },
    img: {
        width: 195,
        height: 180,
        borderRadius: 20,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: -10
    },
    infoTitle: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    info: {
        fontSize: 10,
        marginTop: -10
    },
    stars: {
        flexDirection: 'row',
        marginBottom: 10
    }
})

export default RecipeImgCard;
