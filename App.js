import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import theme from './theme';
import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import Theme from './theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: Theme.colors.primary }}
      initialRouteName="Home"
      tabBarOptions={{
        tabStyle: {
          border: 0,
          backgroundColor: Theme.colors.primary,
        },
        activeTintColor: Theme.colors.background,
        inactiveTintColor: Theme.colors.accent,
        pressColor: '#9f9f9f',
        style: {
          backgroundColor: Theme.colors.primary,
          marginTop: -10,
          height: 60,
          borderTopColor: Theme.colors.primary,
          paddingBottom: 7,
          labelStyle: {
            fontSize: 20
          }
        },
      }}
      screenOptions={({ route, navigation }) => ({
        tabBarLabel: navigation.isFocused() ? route.name : '',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Favourites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }
          return <Ionicons name={iconName} size={32} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="Recipe" component={RecipeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}