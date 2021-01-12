import React from 'react'
import { View, StyleSheet } from 'react-native'

import { BottomNavigation } from 'react-native-paper';
import Theme from '../Theme';
import HomeScreen from '../screens/HomeScreen';
import RecipeScreen from '../screens/RecipeScreen';

const BottomNav = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'fav', title: 'Favourites', icon: 'heart' }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        fav: RecipeScreen
    });

    return (
        <View style={styles.container}>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.colors.primary
    }
});

export default BottomNav;