/**
 * Splash Screen
 */

import React, { useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './SplashScreenStyle';

const SplashScreen = ({ navigation, route }) => {
    useEffect(() => {
        setTimeout(async () => {
            navigation.replace('HomeScreen')
        }, 3000);
  },[]);


    return (
        <ImageBackground source={require('../../assets/earth.png')} style={styles.container}>
            <View >
                <Animatable.View useNativeDriver animation="zoomInDown" duraton="2000">
                    <Text style={styles.testStyle}>Country Project</Text>
                </Animatable.View>
            </View>
        </ImageBackground>
    );
};

export default SplashScreen;

