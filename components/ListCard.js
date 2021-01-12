import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { Title, Paragraph, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../theme';

const ListCard = ({ data }) => {
    const navigation = useNavigation();
    const [status, setStatus] = useState('heart-outline');

    const onButtonToggle = () => {
        setStatus(status === 'heart-outline' ? 'heart' : 'heart-outline');
    };

    return (
        <TouchableOpacity activeOpacity={0.85}
            onPress={() => navigation.navigate('Recipe')} style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.img}
                    source={data.img}
                />
                <View style={styles.textContainer}>
                    <Title style={styles.title}>{data.name}</Title>
                    <View style={styles.subtitle}>
                        <Paragraph style={styles.para}>
                            <Ionicons name='star' size={12} color={Theme.colors.accent} />
                            {data.stars}
                        </Paragraph>
                        <Paragraph style={styles.line}>{' '}|{' '}</Paragraph>
                        <Paragraph style={styles.para}>Category:{data.category}</Paragraph>
                    </View>
                </View>
            </View>

            <IconButton
                icon={status}
                color={Theme.colors.surface}
                size={24}
                onPress={onButtonToggle}
                style={styles.heart}
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 5,
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%'
    },
    textContainer: {
        marginLeft: 10
    },
    img: {
        width: 95,
        height: 95,
        borderRadius: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    subtitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    para: {
        fontSize: 12,
        color: '#777',
        marginTop: -3
    },
    line: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#777',
        marginTop: -3
    },
    heart: {
        alignSelf: 'center'
    }
})

export default ListCard
