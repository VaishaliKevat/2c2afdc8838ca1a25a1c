/**
 * Root Stack Screen
 */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Home/SplashScreen';
import HomeScreen from '../Home/HomeScreen';
import CountryListScreen from '../Home/Country_List';
import CountryDetailScreen from '../Home/Country_Details';

const RootStack = createStackNavigator();
const NewStack = createStackNavigator();

const RootStackScreen = (props) => {
    return (
        <RootStack.Navigator>                        
            <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <RootStack.Screen 
                options={({ route, navigation }) => ({
                    title: 'Search Country List By Name',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                } 
                name="HomeScreen" 
                component={HomeScreen}
            />
            <RootStack.Screen 
                options={({ route, navigation }) => ({
                    title: 'Country List',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                } 
                name="CountryListScreen" 
                component={CountryListScreen}
            />
            <RootStack.Screen 
                options={({ route, navigation }) => ({
                    title: 'Country Details',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
                    route: { route },
                    navigation: { navigation }
                })
                } 
                name="CountryDetailScreen" 
                component={CountryDetailScreen}
            />
        </RootStack.Navigator>
    );
};

export default RootStackScreen;