/**
 *  Main Home Screen
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import COLOR_CONST from '../../../app/theme/ColorConstants';
import styles from './HomeScreenStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            countryData: null,
        }
    }

    onPressSubmitData = async () => {
        try {
            let response = await fetch(
                `https://restcountries.eu/rest/v2/name/${this.state.country}`
            );
            let json = await response.json();
            this.setState({ countryData: json }, () => {
                if (json.status === 404) {
                    alert(json.message);
                    return;
                }
                this.props.navigation.navigate('CountryListScreen', { countryList: this.state.countryData })
            })
            console.log('@@@ JSON ============', json);
        } catch (error) {
            console.log('@@@ Error ============', error);
        }
    }

    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: COLOR_CONST.white }]}>
                <KeyboardAwareScrollView>
                    <View style={styles.container}>
                        <View style={styles.inputFormHeader}>
                            <TextInput {...this.props}
                                style={[styles.inputStyle, { borderColor: this.state.country.trim().length === 0 ? 'grey' : 'green' }]}
                                placeholder={'Please Enter Country Name!'}
                                value={this.state.country}
                                onChangeText={(value) => this.setState({ country: value })}
                                autoCapitalize={false}
                            />
                            <TouchableOpacity disabled={this.state.country.trim().length === 0} onPress={() => this.onPressSubmitData()} style={[styles.submitButton, { backgroundColor: this.state.country.trim().length === 0 ? '#b3b3b3' : '#2C5D3F' }]}>
                                <Text style={[styles.submitText, { color: this.state.country.trim().length === 0 ? '#ffffff' : '#ffffff' }]}>SUBMIT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
};
