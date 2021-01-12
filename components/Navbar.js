import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Surface, Title, IconButton, Searchbar } from 'react-native-paper';
import Theme from '../theme';

const Navbar = () => {
    const [searchStatus, setSearchStatus] = useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => {
        setSearchQuery(query);
        console.log(query);
    }

    const onButtonToggle = () => {
        setSearchStatus(searchStatus ? false : true);
    };

    return (
        <Surface style={styles.nav}>
            <View style={styles.container}>
                {
                    searchStatus ?
                        <>
                            <Searchbar
                                placeholder="Search"
                                onChangeText={onChangeSearch}
                                value={searchQuery}
                                onIconPress={onButtonToggle}
                                style={styles.searchbar}
                            />
                        </>
                        : <>
                            <Title style={styles.title}>THE BAKE PLACE</Title>
                            <IconButton
                                icon='magnify'
                                size={24}
                                onPress={onButtonToggle}
                                color={Theme.colors.accent}
                            />
                        </>
                }

            </View>
        </Surface>
    );
};

const styles = StyleSheet.create({
    nav: {
        borderRadius: 25,
        marginBottom: 5,
        marginTop: 27,
        backgroundColor: Theme.colors.background,
        marginHorizontal: 12
    },
    searchbar: {
        backgroundColor: Theme.colors.background
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})


export default Navbar;