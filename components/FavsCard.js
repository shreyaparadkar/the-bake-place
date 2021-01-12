import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { Surface, Title, Paragraph, IconButton } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Theme from '../theme';

const FavsCard = ({ data }) => {
    const [status, setStatus] = useState('heart');

    const onButtonToggle = () => {
        setStatus(status === 'heart-outline' ? 'heart' : 'heart-outline');
    };

    const navigation = useNavigation();

    return (
        <TouchableOpacity activeOpacity={0.9}
            onPress={() => { navigation.navigate('Recipe') }} style={styles.container}>
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
            <Surface style={styles.card}>
                <Title style={styles.title}>{data.name}</Title>
                <Paragraph style={styles.para}>Category:{data.category}</Paragraph>
                <View style={styles.stars}>
                    <MaterialCommunityIcons name="star" size={14} color={Theme.colors.background} />
                    <MaterialCommunityIcons name="star" size={14} color={Theme.colors.background} />
                    <MaterialCommunityIcons name="star" size={14} color={Theme.colors.background} />
                    <MaterialCommunityIcons name="star" size={14} color={Theme.colors.background} />
                    <MaterialCommunityIcons name="star-half" size={14} color={Theme.colors.background} />
                </View>
            </Surface>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 165,
        display: 'flex',
        alignItems: 'flex-end',
        marginHorizontal: 7,
        marginVertical: 5
    },
    img: {
        width: 165,
        height: 250,
        borderRadius: 20,
        marginBottom: -95,
        marginTop: 7
    },
    card: {
        display: 'flex',
        alignSelf: 'flex-end',
        width: 165,
        backgroundColor: 'rgba(199, 145, 167,0.85)',
        marginTop: 120,
        height: 80,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heart: {
        marginTop: -145
    },
    title: {
        color: Theme.colors.background,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: -8
    },
    para: {
        color: Theme.colors.background,
        fontSize: 10,
        marginTop: -10
    },
    stars: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'row'
    }
})

export default FavsCard;
