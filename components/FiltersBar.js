import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Paragraph, IconButton } from 'react-native-paper'
import Theme from '../theme'

const data = [
    {
        icon: 'cake',
        name: 'CAKEs',
    },
    {
        icon: 'cookie',
        name: 'COOKIES',
    },
    {
        icon: 'ice-cream',
        name: 'ICE-CREAM',
    },
    {
        icon: 'cupcake',
        name: 'MUFFINS',
    },
    {
        icon: 'baguette',
        name: 'BREAD',
    },
]

const FiltersBar = () => {
    return (
        <Card style={styles.container}>
            <Card.Content style={styles.iconsContainer}>
                {data.map(element => {
                    return (
                        <View style={styles.iconContent} key={element.icon.toString()}>
                            <IconButton
                                icon={element.icon}
                                color={Theme.colors.primary}
                                size={28}
                                onPress={() => { }}
                                style={styles.icon}
                            />
                            <Paragraph style={styles.para}>{element.name}</Paragraph>
                        </View>
                    );
                })}
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 17,
        backgroundColor: Theme.colors.accent,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: -12
    },
    iconContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4
    },
    icon: {
        backgroundColor: Theme.colors.background
    },
    para: {
        fontSize: 8,
        marginTop: -6,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default FiltersBar
