import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Surface, IconButton, Paragraph } from 'react-native-paper';
import Theme from '../theme';


const Titlebar = () => {
    const navigation = useNavigation();
    const [status, setStatus] = useState('heart-outline');

    const onButtonToggle = () => {
        setStatus(status === 'heart-outline' ? 'heart' : 'heart-outline');
    };
    return (
        <Surface style={styles.nav}>
            <TouchableOpacity style={styles.container} onPress={() => { navigation.goBack() }}>
                <IconButton
                    icon='chevron-left'
                    size={24}
                    color={Theme.colors.primary}
                />
                <Paragraph style={styles.para}>Back</Paragraph>
            </TouchableOpacity>
            <IconButton
                icon={status}
                size={24}
                onPress={onButtonToggle}
                color={Theme.colors.surface}
            />
        </Surface>
    );
};

const styles = StyleSheet.create({
    nav: {
        borderRadius: 25,
        marginBottom: 5,
        marginTop: 27,
        backgroundColor: Theme.colors.background,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    para: {
        marginLeft: -16
    }
})


export default Titlebar;