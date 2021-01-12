import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { Surface, Title, Paragraph, IconButton } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../theme';

const ImgCard = ({ data }) => {
    const [status, setStatus] = useState('heart-outline');

    const onButtonToggle = () => {
        setStatus(status === 'heart-outline' ? 'heart' : 'heart-outline');
    };

    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.85}
            onPress={() => { navigation.navigate('Recipe') }} style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img}
                    source={data.img}
                />
                <IconButton
                    icon={status}
                    color={Theme.colors.surface}
                    size={24}
                    onPress={onButtonToggle}
                    style={styles.heart}
                />
            </View>
            <Surface style={styles.card}>
                <Title style={styles.title}>{data.name}</Title>
                <Paragraph style={styles.para}>
                    <Ionicons name='star' size={12} color='white' />
                    {' '}{data.stars}
                </Paragraph>
            </Surface>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 190,
        display: 'flex',
        alignItems: 'center',
        marginHorizontal: 7
    },
    imgContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },
    card: {
        width: 190,
        marginTop: 15,
        backgroundColor: Theme.colors.primary,
        zIndex: -10,
        height: 120,
        borderRadius: 20,
        paddingTop: 50,
        paddingHorizontal: 27,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    img: {
        width: 175,
        height: 115,
        borderRadius: 20,
        marginBottom: -95,
        marginTop: 7
    },
    heart: {
        marginTop: -15
    },
    title: {
        marginTop: -8,
        fontSize: 14,
        fontWeight: 'bold',
        color: Theme.colors.background
    },
    para: {
        marginTop: -5,
        fontSize: 12,
        color: Theme.colors.background
    }
})

export default ImgCard
