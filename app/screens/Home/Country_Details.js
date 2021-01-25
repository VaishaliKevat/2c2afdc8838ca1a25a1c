/**
 * Country Detail Screen
 */

import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import COLOR_CONST from '../../theme/ColorConstants';
import styles from './Country_Details_Style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import Scale, { verticalScale } from '../../utils/Scale';

export default class CountryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            countryData: null,
            weatherData: null,
            showData: false,
        }
    }

    onPressWeatherData = async () => {
        const { capital } = this.props.route.params.countryDetail;
        let apiKey = '19971f642dfc4e5d84aef7e22307a7db'
        try {
            let response = await fetch(
                `http://api.weatherstack.com/current?access_key=${apiKey}&query=${capital}`
            );

            let json = await response.json();
            this.setState({ weatherData: json.current }, () => {
                this.setState({ showData: true });
            })
            console.log('@@@ Weather JSON ============', json);
        } catch (error) {
            console.log('@@@ Error ============', error);
        }
    }

    renderCountryDetail = () => {
        const { name, capital, population, latlng, flag } = this.props.route.params.countryDetail;
        return (
            <View style={{ marginTop: verticalScale(20), alignItems: 'center' }}>
                <View style={styles.flag}>
                    <Animatable.View animation="shake">
                        <SvgUri
                            width="100%"
                            height="100%"
                            uri={flag}
                        />
                    </Animatable.View>
                </View>
                <View style={styles.countryList}>
                    <Text style={styles.fieldValue}>Name: {name}</Text>
                    <Text style={styles.fieldValue}>Capital: {capital}</Text>
                    <Text style={styles.fieldValue}>Populations: {population}</Text>
                    <Text style={styles.fieldValue}>Lating: {latlng}</Text>
                </View>
                <Animatable.View animation="shake">
                    <TouchableOpacity onPress={() => this.onPressWeatherData()} style={[styles.submitButton]}>
                        <Text style={[styles.submitText]}>Capitals Weather</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        )
    }

    renderWeatherData = () => {
        const { wind_speed, temperature, precip, weather_icons } = this.state.weatherData;
        return (
            <View style={styles.weatherData}>
                <View>
                    <Text style={[styles.fieldValue, { marginLeft: Scale(25) }]}>Temperature: {temperature}</Text>
                    <Text style={[styles.fieldValue, { marginLeft: Scale(25) }]}>PRECIP: {precip}</Text>
                    <Text style={[styles.fieldValue, { marginLeft: Scale(25) }]}>Wind speed: {wind_speed}</Text>
                </View>
                <Image source={{ uri: weather_icons[0] }} style={styles.imageIcon} />
            </View>
        )
    }

    render() {
        return (
            <KeyboardAwareScrollView style={[styles.container, { backgroundColor: COLOR_CONST.white }]}>
                <View style={styles.container}>
                    <Animatable.View useNativeDriver animation="fadeInDown" delay={300} style={styles.header}>
                        {this.renderCountryDetail()}
                        {this.state.showData && this.renderWeatherData()}
                    </Animatable.View>
                </View>
            </KeyboardAwareScrollView>
        );
    }
};
